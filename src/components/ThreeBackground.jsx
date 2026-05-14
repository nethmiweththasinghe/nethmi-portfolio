import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground({ compact = false }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 500);
    // Pull back further on desktop so larger rings fit in frame
    camera.position.set(0, 0, compact ? 22 : 72);

    const COLORS = [0xa78bfa, 0x5eead4, 0x7c3aed, 0xc4b5fd, 0x38bdf8];

    const opacityBoost = compact ? 1.6 : 1.0;

    // All radii scaled up ~1.5× from original
    const ringDefs = [
      { r: 27, tube: 0.22, color: 0xa78bfa, tiltX: 1.1,  tiltZ: 0.3,  orbitSpeed: 0.0028, selfSpin: 0.009,  opacity: 0.70 },
      { r: 20, tube: 0.16, color: 0x5eead4, tiltX: 0.4,  tiltZ: 1.0,  orbitSpeed: -0.004, selfSpin: 0.013,  opacity: 0.60 },
      { r: 14, tube: 0.13, color: 0x7c3aed, tiltX: 0.7,  tiltZ: -0.8, orbitSpeed: 0.006,  selfSpin: -0.017, opacity: 0.55 },
      { r:  9, tube: 0.11, color: 0xc4b5fd, tiltX: -0.9, tiltZ: 0.5,  orbitSpeed: -0.008, selfSpin: 0.022,  opacity: 0.50 },
      { r: 33, tube: 0.12, color: 0x5eead4, tiltX: -0.3, tiltZ: 1.3,  orbitSpeed: 0.0018, selfSpin: -0.006, opacity: 0.35 },
      { r: 23, tube: 0.09, color: 0xa78bfa, tiltX: 1.5,  tiltZ: -0.4, orbitSpeed: -0.003, selfSpin: 0.010,  opacity: 0.40 },
      { r:  6, tube: 0.10, color: 0x38bdf8, tiltX: 0.2,  tiltZ: 0.9,  orbitSpeed: 0.012,  selfSpin: -0.030, opacity: 0.55 },
    ];

    const rings = ringDefs.map((def) => {
      const geo = new THREE.TorusGeometry(def.r, def.tube, 16, 140);
      const mat = new THREE.MeshBasicMaterial({
        color: def.color,
        transparent: true,
        opacity: Math.min(1, def.opacity * opacityBoost),
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = def.tiltX;
      mesh.rotation.z = def.tiltZ;
      const pivot = new THREE.Object3D();
      pivot.add(mesh);
      scene.add(pivot);
      return { mesh, pivot, def };
    });

    // Particle halo
    const HALO_COUNT = compact ? 150 : 350;
    const haloPos = new Float32Array(HALO_COUNT * 3);
    const haloCol = new Float32Array(HALO_COUNT * 3);
    for (let i = 0; i < HALO_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      const r     = 12 + Math.random() * 28;
      haloPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      haloPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      haloPos[i * 3 + 2] = r * Math.cos(phi) * 0.35;
      const c = new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)]);
      haloCol[i * 3] = c.r; haloCol[i * 3 + 1] = c.g; haloCol[i * 3 + 2] = c.b;
    }
    const haloGeo = new THREE.BufferGeometry();
    haloGeo.setAttribute("position", new THREE.BufferAttribute(haloPos, 3));
    haloGeo.setAttribute("color",    new THREE.BufferAttribute(haloCol, 3));
    const haloMat = new THREE.PointsMaterial({
      size: compact ? 0.5 : 0.28,
      vertexColors: true,
      transparent: true,
      opacity: compact ? 0.9 : 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const halo = new THREE.Points(haloGeo, haloMat);
    scene.add(halo);

    // Mouse / touch / gyro parallax
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMouseMove = (e) => {
      mouse.tx = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * -2;
    };
    const onTouchMove = (e) => {
      if (!e.touches.length) return;
      mouse.tx = (e.touches[0].clientX / window.innerWidth  - 0.5) * 2;
      mouse.ty = (e.touches[0].clientY / window.innerHeight - 0.5) * -2;
    };
    const onDeviceOrientation = (e) => {
      if (e.gamma !== null && e.beta !== null) {
        mouse.tx = Math.max(-1, Math.min(1, e.gamma / 30));
        mouse.ty = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("deviceorientation", onDeviceOrientation);

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    let animId;
    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      mouse.x += (mouse.tx - mouse.x) * 0.035;
      mouse.y += (mouse.ty - mouse.y) * 0.035;

      const parallaxScale = compact ? 1.5 : 4;
      camera.position.x = mouse.x * parallaxScale;
      camera.position.y = mouse.y * (compact ? 1 : 2.5);
      camera.lookAt(0, 0, 0);

      rings.forEach(({ mesh, pivot, def }) => {
        pivot.rotation.y += def.orbitSpeed;
        mesh.rotation.x  += def.selfSpin * 0.5;
        const s = 1 + Math.sin(t * 0.6 + def.tiltX) * 0.015;
        mesh.scale.set(s, s, s);
        mesh.material.opacity = Math.min(1, def.opacity * opacityBoost * (0.85 + Math.sin(t * 0.8 + def.tiltZ) * 0.15));
      });

      halo.rotation.y = t * 0.012;
      halo.rotation.x = Math.sin(t * 0.007) * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("deviceorientation", onDeviceOrientation);
      window.removeEventListener("resize", onResize);
      rings.forEach(({ mesh }) => { mesh.geometry.dispose(); mesh.material.dispose(); });
      haloGeo.dispose(); haloMat.dispose(); renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [compact]);

  return (
    <div
      ref={mountRef}
      style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}