import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ─────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene & Camera ───────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 500);
    camera.position.set(0, 0, 55);

    // ── Palette ──────────────────────────────────────────────────
    const COLORS = [
      0xa78bfa, // violet
      0x5eead4, // teal
      0x7c3aed, // deep purple
      0xc4b5fd, // light violet
      0x38bdf8, // sky blue accent
    ];

    // ── Ring factory ─────────────────────────────────────────────
    // Each ring is a TorusGeometry with its own orbit params
    const ringDefs = [
      { r: 18, tube: 0.18, color: 0xa78bfa, tiltX: 1.1,  tiltZ: 0.3,  orbitSpeed: 0.0028, selfSpin: 0.009,  opacity: 0.70 },
      { r: 13, tube: 0.13, color: 0x5eead4, tiltX: 0.4,  tiltZ: 1.0,  orbitSpeed: -0.004, selfSpin: 0.013,  opacity: 0.60 },
      { r:  9, tube: 0.11, color: 0x7c3aed, tiltX: 0.7,  tiltZ: -0.8, orbitSpeed: 0.006,  selfSpin: -0.017, opacity: 0.55 },
      { r:  6, tube: 0.09, color: 0xc4b5fd, tiltX: -0.9, tiltZ: 0.5,  orbitSpeed: -0.008, selfSpin: 0.022,  opacity: 0.50 },
      { r: 22, tube: 0.10, color: 0x5eead4, tiltX: -0.3, tiltZ: 1.3,  orbitSpeed: 0.0018, selfSpin: -0.006, opacity: 0.35 },
      { r: 15, tube: 0.07, color: 0xa78bfa, tiltX: 1.5,  tiltZ: -0.4, orbitSpeed: -0.003, selfSpin: 0.010,  opacity: 0.40 },
      { r:  4, tube: 0.08, color: 0x38bdf8, tiltX: 0.2,  tiltZ: 0.9,  orbitSpeed: 0.012,  selfSpin: -0.030, opacity: 0.55 },
    ];

    const rings = ringDefs.map((def) => {
      const geo = new THREE.TorusGeometry(def.r, def.tube, 16, 140);
      const mat = new THREE.MeshBasicMaterial({
        color: def.color,
        transparent: true,
        opacity: def.opacity,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);

      // Static tilt — gives 3D look
      mesh.rotation.x = def.tiltX;
      mesh.rotation.z = def.tiltZ;

      // Wrap in a pivot for orbiting
      const pivot = new THREE.Object3D();
      pivot.add(mesh);
      scene.add(pivot);

      return { mesh, pivot, def };
    });

    // ── Particle halo (sparse dots around rings) ─────────────────
    const HALO_COUNT = 350;
    const haloPos = new Float32Array(HALO_COUNT * 3);
    const haloCol = new Float32Array(HALO_COUNT * 3);
    for (let i = 0; i < HALO_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      const r     = 8 + Math.random() * 20;
      haloPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      haloPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      haloPos[i * 3 + 2] = r * Math.cos(phi) * 0.35; // flatten into a disc shape
      const c = new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)]);
      haloCol[i * 3]     = c.r;
      haloCol[i * 3 + 1] = c.g;
      haloCol[i * 3 + 2] = c.b;
    }
    const haloGeo = new THREE.BufferGeometry();
    haloGeo.setAttribute("position", new THREE.BufferAttribute(haloPos, 3));
    haloGeo.setAttribute("color",    new THREE.BufferAttribute(haloCol, 3));
    const haloMat = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const halo = new THREE.Points(haloGeo, haloMat);
    scene.add(halo);

    // ── Mouse parallax ───────────────────────────────────────────
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMouseMove = (e) => {
      mouse.tx = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * -2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Resize ───────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Animation ────────────────────────────────────────────────
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.tx - mouse.x) * 0.035;
      mouse.y += (mouse.ty - mouse.y) * 0.035;

      // Subtle camera drift following mouse
      camera.position.x = mouse.x * 4;
      camera.position.y = mouse.y * 2.5;
      camera.lookAt(0, 0, 0);

      // Animate each ring
      rings.forEach(({ mesh, pivot, def }) => {
        // Orbit the pivot around Y axis
        pivot.rotation.y += def.orbitSpeed;

        // Self-spin on ring's local X
        mesh.rotation.x += def.selfSpin * 0.5;

        // Breathe — subtle scale pulse
        const s = 1 + Math.sin(t * 0.6 + def.tiltX) * 0.015;
        mesh.scale.set(s, s, s);

        // Opacity shimmer
        mesh.material.opacity = def.opacity * (0.85 + Math.sin(t * 0.8 + def.tiltZ) * 0.15);
      });

      // Halo slow drift
      halo.rotation.y = t * 0.012;
      halo.rotation.x = Math.sin(t * 0.007) * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ──────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      rings.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      haloGeo.dispose();
      haloMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}