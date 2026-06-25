import type { ImageMetadata } from 'astro';

// Importación segura de recursos visuales desde src/assets/projects/
import imgPeter from '../assets/projects/peter.png';
import imgIotCnc from '../assets/projects/iot-cnc.png';
import imgSalli from '../assets/projects/salli.png';
import imgNeuroEmotion from '../assets/projects/neuro-emotion.png';

// Definimos la interfaz para tener autocompletado y seguridad de tipos (Opcional si usas TS)
export interface Proyecto {
  id: string;
  titulo: string;
  subtitulo: string;
  fecha: string;
  rol: string;
  tags: string[];
  imagenObjeto: ImageMetadata;
  colorClase: string;
  colorHex: string;
  detallesHTML: string;
  github: string;
  video: string;
}

// Exportamos el arreglo de datos limpio
export const proyectosData: Proyecto[] = [
    {
    id: "peter",
    titulo: "Plataforma Híbrida Multimodal Peter",
    subtitulo: "Arquitectura de control autónomo e IA Bioinspirada Embebida para locomoción híbrida (cuadrúpeda-rodante).",
    fecha: "2026",
    rol: "Arquitecto de Control Autónomo",
    tags: ["ROS 2", "Edge AI", "C++", "Gazebo"],
    imagenObjeto: imgPeter,
    colorClase: "bio-rose",
    colorHex: "#D8A499",
    detallesHTML: `
      <div class="space-y-6">
        <div>
          <h4 class="font-tech text-lg text-bio-green mb-2 border-b border-bio-text/10 pb-1 uppercase tracking-wider">Resumen Ejecutivo & Liderazgo</h4>
          <p class="font-sans text-xs md:text-sm text-bio-text/80 leading-relaxed">
            Conceptualización e ingeniería de una plataforma de locomoción multimodal híbrida. Ejecución de 60 ensayos continuos de validación con inyección de ruido estocástico uniforme ($S = 0 \\to 4$), logrando una tasa de éxito operativa del 100% en evasión de obstáculos vectoriales y consolidando la transición morfológica con una fiabilidad paramétrica del 95%.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-white/40 border border-bio-text/5 rounded-xl">
            <span class="font-code text-[10px] text-bio-rose block uppercase">Métrica Clave // Latencia</span>
            <span class="font-tech text-3xl font-bold text-bio-text">47 ms</span>
            <p class="text-[10px] text-bio-text/60 mt-1 font-sans">Bucle cerrado de control de alta frecuencia sin cuellos de botella en cache.</p>
          </div>
          <div class="p-4 bg-white/40 border border-bio-text/5 rounded-xl">
            <span class="font-code text-[10px] text-bio-green block uppercase">Precisión // Actitud</span>
            <span class="font-tech text-3xl font-bold text-bio-text">± 0.54°</span>
            <p class="text-[10px] text-bio-text/60 mt-1 font-sans">Error acotado de Roll RMS y ±1.06° de Pitch RMS sobre ruido topográfico.</p>
          </div>
        </div>

        <div>
          <h4 class="font-tech text-base text-bio-green mb-2 uppercase">Leyes de Control y Selección Neuronal</h4>
          <p class="font-sans text-xs text-bio-text/75 leading-relaxed mb-2">
            La resolución de conflictos entre estímulos se rige por ecuaciones diferenciales de integración con fugas (leaky-integrator) inspiradas en la topología de los ganglios basales para actualización de tasa neuronal:
          </p>
          <div class="p-3 bg-black/5 rounded-lg border border-bio-text/10 font-code text-xs text-bio-green text-center">
            τ · (da_i / dt) = -a_i + max(0, Σ W_ij · a_j + I_i - θ)
          </div>
        </div>
      </div>
    `,
    github: "#",
    video: "#"
  },
  {
    id: "iot-cnc",
    titulo: "IoT CNC PCB Monitor",
    subtitulo: "Plataforma de monitoreo industrial distribuida mediante Edge AI y orquestación Serverless.",
    fecha: "2025",
    rol: "Lead Systems Architect & Embedded Firmware Engineer",
    tags: ["Azure IoT", "ESP32", "TinyML", "MQTT"],
    imagenObjeto: imgIotCnc,
    colorClase: "bio-green",
    colorHex: "#4E5E52",
    detallesHTML: `
      <div class="space-y-6">
        <div>
          <h4 class="font-tech text-lg text-bio-green mb-2 border-b border-bio-text/10 pb-1 uppercase tracking-wider">Impacto Técnico & Cloud</h4>
          <p class="font-sans text-xs md:text-sm text-bio-text/80 leading-relaxed">
            Ingeniería de extremo a extremo de un sistema distribuido de análisis industrial. Diseñado mediante desacoplamiento estricto de microservicios con despliegues automatizados bajo el paradigma de Infraestructura como Código (IaC).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-white/40 border border-bio-text/5 rounded-xl">
            <span class="font-code text-[10px] text-bio-blue block uppercase">Inferencia local // TinyML</span>
            <span class="font-tech text-3xl font-bold text-bio-text">312 ms</span>
            <p class="text-[10px] text-bio-text/60 mt-1 font-sans">Clasificación de topología de placa sobre matriz RGB565 con certeza P ≥ 0.94.</p>
          </div>
          <div class="p-4 bg-white/40 border border-bio-text/5 rounded-xl">
            <span class="font-code text-[10px] text-bio-brown block uppercase">Políticas // Anomalias</span>
            <span class="font-tech text-3xl font-bold text-bio-text">Δt = 300s</span>
            <p class="text-[10px] text-bio-text/60 mt-1 font-sans">Ventana estricta de mitigación y cooldown para alertas críticas vía Telegram API.</p>
          </div>
        </div>

        <div>
          <h4 class="font-tech text-base text-bio-green mb-2 uppercase">Integridad Operacional</h4>
          <p class="font-sans text-xs text-bio-text/75 leading-relaxed">
            La integridad estructural se evalúa constantemente comparando métricas contra las restricciones estables de borde:
          </p>
          <div class="p-3 bg-black/5 rounded-lg border border-bio-text/10 font-code text-xs text-bio-green text-center">
            T_min ≤ T ≤ T_max  ∧  H_min ≤ H ≤ H_max  ∧  S_vibration &lt; 0.80
          </div>
        </div>
      </div>
    `,
    github: "#",
    video: "#"
  },
  {
    id: "salli",
    titulo: "Robot SALLI",
    subtitulo: "Plataforma robótica modular con locomoción biomimética de alta eficiencia.",
    fecha: "2024",
    rol: "Systems & Engineering Lead",
    tags: ["FreeRTOS", "ESP-IDF", "YOLOv8", "Modularity"],
    imagenObjeto: imgSalli,
    colorClase: "bio-rose",
    colorHex: "#D8A499",
    detallesHTML: `
      <div class="space-y-6">
        <div>
          <h4 class="font-tech text-lg text-bio-green mb-2 border-b border-bio-text/10 pb-1 uppercase tracking-wider">Logros de Sistemas & Diseño Mecánico</h4>
          <p class="font-sans text-xs md:text-sm text-bio-text/80 leading-relaxed">
            Dirección del ciclo de vida bajo lineamientos de calidad ISO 9001, reduciendo iteración de diseño en un 25%. Estructura mecánica modular "glue-less" de ensamble por cola de milano (dovetail), optimizada para impresión FDM.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-white/40 border border-bio-text/5 rounded-xl">
            <span class="font-code text-[10px] text-bio-rose block uppercase">Frecuencia de Red // IDF</span>
            <span class="font-tech text-3xl font-bold text-bio-text">50 Hz</span>
            <p class="text-[10px] text-bio-text/60 mt-1 font-sans">Sincronización determinista de articulaciones con latencia de transporte &lt; 15 ms.</p>
          </div>
          <div class="p-4 bg-white/40 border border-bio-text/5 rounded-xl">
            <span class="font-code text-[10px] text-bio-green block uppercase">Mantenibilidad // DownTime</span>
            <span class="font-tech text-3xl font-bold text-bio-text">&lt; 5 min</span>
            <p class="text-[10px] text-bio-text/60 mt-1 font-sans">Reparación física de módulos en campo asegurada por pernos mecánicos M3.</p>
          </div>
        </div>

        <div>
          <h4 class="font-tech text-base text-bio-green mb-2 uppercase">Inferencia en el Borde</h4>
          <p class="font-sans text-xs text-bio-text/75 leading-relaxed">
            Procesamiento y detección en tiempo real a bordo de nodos ESP32-CAM gracias a la cuantización de red y reducción de footprint de memoria:
          </p>
          <div class="p-3 bg-black/5 rounded-lg border border-bio-text/10 font-code text-xs text-bio-green text-center">
            YOLOv8-Inference-Engine ~30 FPS sin Thermal Throttling
          </div>
        </div>
      </div>
    `,
    github: "#",
    video: "#"
  },
  {
    id: "neuro-emotion",
    titulo: "Children's Emotion Recognition System",
    subtitulo: "Clasificación y regularización de expresiones faciales para registros clínicos de salud mental infantil.",
    fecha: "2025",
    rol: "Principal AI Research & Computer Vision Engineer",
    tags: ["YOLOv8-cls", "PyTorch", "Deep Learning"],
    imagenObjeto: imgNeuroEmotion,
    colorClase: "bio-blue",
    colorHex: "#8FA9C4",
    detallesHTML: `
      <div class="space-y-6">
        <div>
          <h4 class="font-tech text-lg text-bio-green mb-2 border-b border-bio-text/10 pb-1 uppercase tracking-wider">Arquitectura de Visión Computacional</h4>
          <p class="font-sans text-xs md:text-sm text-bio-text/80 leading-relaxed">
            Orquestación de un pipeline jerárquico que filtra segmentos demográficos en tiempo real (aislando la cohorte infantil) para optimizar el cómputo de inferencias en dispositivos clínicos embebidos.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-white/40 border border-bio-text/5 rounded-xl">
            <span class="font-code text-[10px] text-bio-blue block uppercase">YOLOv8-cls vs ResNet18</span>
            <span class="font-tech text-3xl font-bold text-bio-text">+16.3%</span>
            <p class="text-[10px] text-bio-text/60 mt-1 font-sans">Superioridad estadística de precisión absoluta debido al mecanismo de atención interna.</p>
          </div>
          <div class="p-4 bg-white/40 border border-bio-text/5 rounded-xl">
            <span class="font-code text-[10px] text-bio-brown block uppercase">Métrica Final // F1-Score</span>
            <span class="font-tech text-3xl font-bold text-bio-text">0.706</span>
            <p class="text-[10px] text-bio-text/60 mt-1 font-sans">Mitigación efectiva de sesgos y sobreajustes hacia expresiones mayoritarias.</p>
          </div>
        </div>

        <div>
          <h4 class="font-tech text-base text-bio-green mb-2 uppercase">Espacio Categórico de Variables Clínicas</h4>
          <p class="font-sans text-xs text-bio-text/75 leading-relaxed">
            Las geometrías faciales se mapean en un espacio categórico de 4 dimensiones correspondiente a variables estandarizadas de salud mental:
          </p>
          <div class="p-3 bg-black/5 rounded-lg border border-bio-text/10 font-code text-xs text-bio-green text-center">
            Y = { Joy, Anger, Sadness, Neutral }
          </div>
        </div>
      </div>
    `,
    github: "#",
    video: "#"
  }
];