import ma2 from '../../assets/ma2.png';
import ma3 from '../../assets/ma3.jpg';
import ma4 from '../../assets/ma4.jpg';
import ma5 from '../../assets/ma5.jpg';
import ma6 from '../../assets/ma6.jpg';
import ma7 from '../../assets/ma7.jpg';
import ma8 from '../../assets/ma8.jpg';
import ma9 from '../../assets/ma9.jpg';

export type Category = 'machineries' | 'metal-components' | 'common-products';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  specifications: Record<string, string>;
  features: string[];
  popular: boolean;
  newest: boolean;
  priceRange: 'budget' | 'mid' | 'premium';
  availability: 'in-stock' | 'on-order' | 'limited';
}

export const products: Product[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // MACHINERIES — local asset images
  // ─────────────────────────────────────────────────────────────────────────────

  {
    id: 'm7',
    name: 'EasyMikz Metering & Mixing Machine',
    category: 'machineries',
    description:
      'High-performance modular metering and mixing system for two-component production — featuring HMI touch screen, pulse-less dispensing, and variable mixing ratios.',
    longDescription:
      'The EasyMikz by FluiMikz Techsol LLP is a high-performance, modular metering and mixing system engineered for demanding two-component production environments. Independent inverter-driven motors for each gear pump ensure precise mixing ratios and higher efficiency. An integrated HMI touch screen enables easy ratio adjustments and user-friendly operation. The portable frame design accommodates larger reservoirs or tanks and supports higher flow rates. Both static and dynamic mixing options are available, tailored to specific process requirements. Pulse-less dispensing guarantees uniform flow with accurate control. The system handles viscosities up to 30,000 mPas and flow rates up to 2,500 ml/min, and is adaptable to manual, semi-automatic, or fully automated production lines.',
    image: ma2,
    tags: ['Metering', 'Mixing', 'Two-Component', 'Dispensing', 'HMI', 'Automation'],
    specifications: {
      'Mixing Ratio': 'Variable',
      'Flow Rate': 'Up to 2500 ml/min',
      'Viscosity Handling': 'Up to 30,000 mPas',
      'Tank Capacity': 'Customized as per requirement',
      'Operating Temperature': 'Up to 120 °C',
      'Electric Supply': '230/415 V, 50 Hz',
      'Compressed Air': '6 bar',
    },
    features: [
      'Independent inverter-driven motors per gear pump',
      'Integrated HMI touch screen',
      'Portable frame design',
      'Static & dynamic mixing options',
      'Pulse-less dispensing',
      'High metering accuracy',
      'Easy calibration and operation',
      'Corrosion-resistant construction',
      'Manual / semi-auto / fully automated adaptable',
    ],
    popular: true,
    newest: true,
    priceRange: 'premium',
    availability: 'on-order',
  },

  {
    id: 'm8',
    name: 'BM-Series Gear Pump (Polyurethane General Purpose)',
    category: 'machineries',
    description:
      'FootMount type precision gear pump for PUR, adhesives, resins, hardeners, isocyanates, and miscellaneous liquids — displacement 6 to 35 cc/rev.',
    longDescription:
      'The DMT BM-Series gear pumps are FootMount type units covering mid-range capacity requirements. They are designed for pumping and metering of PUR, adhesives (resin, hardener, isocyanates), and miscellaneous liquids (solvents, paints, etc.). Built from alloy steel with PTFE drive shaft seals, these pumps operate at speeds of 10–110 rpm and handle viscosities up to 1000 Pa.s. Maximum operating temperature is 120 °C and cleaning temperature up to 150 °C. Optional Nitriding or DLC coating on gears is available on request. Models range from DMT-BM-06CC/F (6 cc/rev, 5.6 kg) to DMT-BM-35CC/F (35 cc/rev, 7.3 kg).',
    image: ma3,
    tags: ['Gear Pump', 'Metering', 'Polyurethane', 'PUR', 'FootMount', 'BM-Series'],
    specifications: {
      'Mount Type': 'FootMount',
      Displacement: '6 to 35 cc/rev',
      'Speed Range': '10–110 rpm',
      'Viscosity Max': '1000 Pa.s',
      'Inlet Pressure': 'Up to 30 kg/cm²',
      'Outlet Pressure Max': 'Up to 70 kg/cm²',
      'Drive Shaft Seal': 'PTFE',
      'Temp. Operating Max': '120 °C',
      'Temp. Cleaning Max': '150 °C',
      'Standard Material': 'Alloy Steel',
    },
    features: [
      'FootMount design for easy integration',
      'Covers mid-range capacity',
      'Suitable for PUR, adhesives, resins, isocyanates',
      'Handles solvents and paints',
      'Optional Nitriding gear coating',
      'Optional DLC gear coating',
      'Models: DMT-BM-06CC/F to DMT-BM-35CC/F',
    ],
    popular: false,
    newest: true,
    priceRange: 'mid',
    availability: 'on-order',
  },

  {
    id: 'm9',
    name: 'DM-Series Gear Pump (High-Precision Metering)',
    category: 'machineries',
    description:
      'FootMount type high-precision metering gear pump for PUR, adhesives, composites, and miscellaneous liquids — displacement 0.05 to 20 cc/rev.',
    longDescription:
      'The DMT DM-Series pumps are FootMount type units designed for high-precision metering applications. With displacement ranging from just 0.05 cc/rev up to 20 cc/rev and a speed range of 10–110 rpm, they deliver the fine metering accuracy required for PUR, adhesives, composites (resin, hardener), and miscellaneous liquids (solvents, paints). Viscosity handling up to 1000 Pa.s, outlet pressure up to 80 kg/cm², and maximum operating temperature of 120 °C. PTFE drive shaft seals and alloy steel construction ensure durability. Optional Nitriding or DLC coating available. Models from DMT-DM-0.05CC/F to DMT-DM-20CC/F.',
    image: ma4,
    tags: ['Gear Pump', 'High-Precision', 'Metering', 'PUR', 'Adhesives', 'DM-Series'],
    specifications: {
      'Mount Type': 'FootMount',
      Displacement: '0.05 to 20 cc/rev',
      'Speed Range': '10–110 rpm',
      'Viscosity Max': '1000 Pa.s',
      'Inlet Pressure': 'Up to 10 kg/cm²',
      'Outlet Pressure Max': 'Up to 80 kg/cm²',
      'Drive Shaft Seal': 'PTFE',
      'Temp. Operating Max': '120 °C',
      'Temp. Cleaning Max': '150 °C',
      'Standard Material': 'Alloy Steel',
    },
    features: [
      'Ultra-fine displacement from 0.05 cc/rev',
      'High-precision metering for composites & PUR',
      'Wide model range: DMT-DM-0.05CC/F to DMT-DM-20CC/F',
      'Suitable for solvents, paints, and adhesives',
      'Optional Nitriding gear coating',
      'Optional DLC gear coating',
    ],
    popular: false,
    newest: true,
    priceRange: 'premium',
    availability: 'on-order',
  },

  {
    id: 'm10',
    name: 'HM-Series Gear Pump (Hot-Melt Adhesives)',
    category: 'machineries',
    description:
      'BaseMount type gear pump for hot-melt adhesives, PUR, silicones, and high-viscous media — operating up to 350 °C, displacement 0.3 to 30 cc/rev.',
    longDescription:
      'The DMT HM-Series pumps are BaseMount type units built specifically for hot-melt adhesive, PUR, silicone, and high-viscous media metering applications. With a maximum operating temperature of 350 °C (cleaning up to 450 °C), they are ideally suited for 2-component adhesive and sealing compound systems. Viscosity handling up to 1500 Pa.s, inlet pressure up to 100 kg/cm², and outlet pressure up to 200 kg/cm². PTFE shaft seals and alloy steel construction with optional Nitriding or DLC coating. Available in two form factors: compact small-body models (DMT-HM-0.3CC/F to DMT-HM-3.0CC/F) and larger body models (DMT-HM-06CC/F to DMT-HM-30CC/F) for higher flow demands.',
    image: ma5,
    tags: ['Gear Pump', 'Hot-Melt', 'Adhesives', 'HMA', 'Silicone', 'HM-Series'],
    specifications: {
      'Mount Type': 'BaseMount',
      Displacement: '0.3 to 30 cc/rev',
      'Speed Range': '10–100 rpm',
      'Viscosity Max': '1500 Pa.s',
      'Inlet Pressure': 'Up to 100 kg/cm²',
      'Outlet Pressure Max': 'Up to 200 kg/cm²',
      'Drive Shaft Seal': 'PTFE',
      'Temp. Operating Max': '350 °C',
      'Temp. Cleaning Max': '450 °C',
      'Standard Material': 'Alloy Steel',
    },
    features: [
      'Designed for hot-melt adhesives & PUR',
      'High-temperature operation up to 350 °C',
      'Suitable for silicones and 2-component sealing systems',
      'Compact and large body variants available',
      'Optional Nitriding and DLC gear coatings',
      'Models: DMT-HM-0.3CC/F to DMT-HM-30CC/F',
    ],
    popular: true,
    newest: true,
    priceRange: 'premium',
    availability: 'on-order',
  },

  {
    id: 'm11',
    name: 'HM-2 Series Gear Pump (Double Outlet Metering)',
    category: 'machineries',
    description:
      'BaseMount double-outlet gear pump for PUR, hot-melt adhesives, silicones, and high-viscous media — displacement 10 cc/rev, operating up to 350 °C.',
    longDescription:
      'The DMT HM-2 Series pumps are BaseMount type units with a unique double-outlet design, making them ideal for 2-component adhesive, hot-melt, silicone, and high-viscous media metering applications. Operating up to 350 °C (cleaning up to 450 °C), they handle viscosities up to 1500 Pa.s with outlet pressures up to 200 kg/cm². PTFE shaft seals and alloy steel construction. The double-outlet configuration allows simultaneous delivery to two points, simplifying system design in complex dispensing setups. Models available: DMT-HM-2-06CC to DMT-HM-2-20CC.',
    image: ma6,
    tags: ['Gear Pump', 'Double Outlet', 'Hot-Melt', 'Adhesives', 'HM-2 Series'],
    specifications: {
      'Mount Type': 'BaseMount',
      Displacement: '10 cc/rev',
      'Speed Range': '10–100 rpm',
      'Viscosity Max': '1500 Pa.s',
      'Inlet Pressure': 'Up to 100 kg/cm²',
      'Outlet Pressure Max': 'Up to 200 kg/cm²',
      'Drive Shaft Seal': 'PTFE',
      'Temp. Operating Max': '350 °C',
      'Temp. Cleaning Max': '450 °C',
      'Standard Material': 'Alloy Steel',
    },
    features: [
      'Double-outlet for simultaneous two-point delivery',
      'Ideal for 2-component adhesive and sealing systems',
      'High-temperature operation up to 350 °C',
      'Suitable for PUR, silicones, and high-viscous media',
      'Optional Nitriding and DLC coatings',
      'Models: DMT-HM-2-06CC to DMT-HM-2-20CC',
    ],
    popular: false,
    newest: true,
    priceRange: 'premium',
    availability: 'on-order',
  },

  {
    id: 'm12',
    name: 'DRM-Series Gear Pump (Fiber & Yarn Metering)',
    category: 'machineries',
    description:
      'FootMount gear pump for staple fibers, industrial yarn (PETP, PA6, Polypropylene) — displacement 6 to 30 cc/rev, operating up to 350 °C.',
    longDescription:
      'The DMT DRM-Series pumps are FootMount type units designed specifically for pumping and metering of staple fibers, non-wovens tire cord, and industrial yarn produced from PETP, PA6, and Polypropylene. Available in single-housing or stacked dual-layer configurations depending on application requirements. Viscosity up to 1000 Pa.s, outlet pressure up to 200 kg/cm², operating temperature up to 350 °C, and cleaning up to 450 °C. Alloy steel construction with PTFE shaft seals. Optional Nitriding or DLC gear coatings available. Models: DMT-DRM-06CC/F to DMT-DRM-30CC/F.',
    image: ma7,
    tags: ['Gear Pump', 'Fiber', 'Yarn', 'PETP', 'PA6', 'Polypropylene', 'DRM-Series'],
    specifications: {
      'Mount Type': 'FootMount',
      Displacement: '06 to 30 cc/rev',
      'Speed Range': '10–100 rpm',
      'Viscosity Max': '1000 Pa.s',
      'Inlet Pressure': 'Up to 100 kg/cm²',
      'Outlet Pressure Max': 'Up to 200 kg/cm²',
      'Drive Shaft Seal': 'PTFE',
      'Temp. Operating Max': '350 °C',
      'Temp. Cleaning Max': '450 °C',
      'Standard Material': 'Alloy Steel',
    },
    features: [
      'Designed for staple fiber and industrial yarn metering',
      'Single-housing or stacked dual-layer configuration',
      'Suitable for PETP, PA6, and Polypropylene processes',
      'High-temperature operation up to 350 °C',
      'Optional Nitriding and DLC coatings',
      'Models: DMT-DRM-06CC/F to DMT-DRM-30CC/F',
    ],
    popular: false,
    newest: true,
    priceRange: 'premium',
    availability: 'on-order',
  },

  {
    id: 'm13',
    name: 'PLR-Series Planetary Spinning Pump',
    category: 'machineries',
    description:
      'High-precision planetary spinning pump for spinneret applications — displacement 0.3 to 3.6 cc/rev, mechanical face seal, operating up to 350 °C.',
    longDescription:
      'The DMT PLR-Series planetary spinning pumps are considered the art of spinning plant engineering. Built to the highest tolerance standards with mechanical face seals and alloy steel construction, they deliver the reliability and longevity required for high-quality yarn production. Speed range 10–40 rpm, inlet pressure up to 80 kg/cm², outlet pressure up to 350 kg/cm², and operating temperature up to 350 °C. Available in PLR4 series (0.3–3.6 cc/rev, 60.4–76 mm) and PLR6 series (0.3–3.6 cc/rev, 80.3–95.5 mm) configurations. Optional Nitriding and DLC gear coatings available.',
    image: ma8,
    tags: ['Spinning Pump', 'Planetary', 'Yarn', 'Spinneret', 'High-Precision', 'PLR-Series'],
    specifications: {
      Displacement: '0.3 to 3.6 cc/rev',
      'Speed Range': '10–40 rpm',
      'Viscosity Max': '500 Pa.s',
      'Inlet Pressure': 'Up to 80 kg/cm²',
      'Outlet Pressure Max': 'Up to 350 kg/cm²',
      'Drive Shaft Seal': 'Mechanical Face Seal',
      'Temp. Operating Max': '350 °C',
      'Temp. Cleaning Max': '450 °C',
      'Standard Material': 'Alloy Steel',
    },
    features: [
      'Highest precision tolerances for quality yarn production',
      'Mechanical face seal for long service life',
      'PLR4 and PLR6 series configurations',
      'High outlet pressure up to 350 kg/cm²',
      'Optional Nitriding and DLC coatings',
      'Models: DMT-PLR4-0.3CC to DMT-PLR6-3.6CC',
    ],
    popular: true,
    newest: true,
    priceRange: 'premium',
    availability: 'on-order',
  },

  {
    id: 'm14',
    name: 'VSF-Series Gear Pump (Small Capacity / Low Duty)',
    category: 'machineries',
    description:
      'Outer gear drive saddle-mount pump for PUR, adhesives, resins, and miscellaneous liquids — displacement 0.297 to 2.92 cc/rev, compact and lightweight.',
    longDescription:
      'The DMT VSF-Series are outer gear drive saddle-mount type pumps specifically covering small capacity and low duty range requirements. Ideal for PUR, adhesives (resin, hardener), miscellaneous liquids, solvents, and paints. Speed range 10–110 rpm, viscosity up to 1000 Pa.s, inlet pressure up to 30 kg/cm², outlet pressure up to 70 kg/cm², operating temperature up to 120 °C. PTFE shaft seals and alloy steel construction. Extremely compact and lightweight (2.0–2.2 kg). Optional Nitriding and DLC gear coatings. Models: DMT-VSF-0.297CC to DMT-VSF-2.92CC.',
    image: ma9,
    tags: ['Gear Pump', 'Saddle Mount', 'Small Capacity', 'PUR', 'Adhesives', 'VSF-Series'],
    specifications: {
      'Mount Type': 'Saddle Mount (outer gear drive)',
      Displacement: '0.297 to 2.92 cc/rev',
      'Speed Range': '10–110 rpm',
      'Viscosity Max': '1000 Pa.s',
      'Inlet Pressure': 'Up to 30 kg/cm²',
      'Outlet Pressure Max': 'Up to 70 kg/cm²',
      'Drive Shaft Seal': 'PTFE',
      'Temp. Operating Max': '120 °C',
      'Temp. Cleaning Max': '150 °C',
      'Standard Material': 'Alloy Steel',
    },
    features: [
      'Compact saddle-mount outer gear drive design',
      'Ideal for small capacity and low duty applications',
      'Suitable for PUR, adhesives, solvents, paints',
      'Ultra-lightweight: 2.0–2.2 kg',
      'Optional Nitriding and DLC coatings',
      'Models: DMT-VSF-0.297CC to DMT-VSF-2.92CC',
    ],
    popular: false,
    newest: true,
    priceRange: 'mid',
    availability: 'on-order',
  },

  {
    id: 'm15',
    name: 'VF-Series Gear Pump (Viscose Filament Yarn)',
    category: 'machineries',
    description:
      'Precision spinning pump for viscose filament yarn and spun fiber production using the wet spinning process — displacement 0.3 to 100 cc/rev.',
    longDescription:
      'The DMT VF-Series are specialized gear pumps for viscose filament yarn applications. Viscose fibers are regenerated cellulose fibers produced both as filament yarn and spun fiber via the wet spinning process. VF-Series pumps cover the complete range from micro-volume (DMT-VC-0.3CC, 0.3 cc/rev) up to high-volume production (DVS001-100CC, 100 cc/rev). Operating temperature up to 120 °C (cleaning to 150 °C), viscosity up to 1000 Pa.s, inlet up to 30 kg/cm², outlet up to 70 kg/cm². PTFE shaft seals and alloy steel construction. Optional Nitriding and DLC coatings available. Multiple sub-variants available including standard, B-type, and SP-type configurations.',
    image: ma2,
    tags: ['Spinning Pump', 'Viscose', 'Filament Yarn', 'Wet Spinning', 'Cellulose', 'VF-Series'],
    specifications: {
      Displacement: '0.3 to 100 cc/rev',
      'Speed Range': '10–110 rpm',
      'Viscosity Max': '1000 Pa.s',
      'Inlet Pressure': 'Up to 30 kg/cm²',
      'Outlet Pressure Max': 'Up to 70 kg/cm²',
      'Drive Shaft Seal': 'PTFE',
      'Temp. Operating Max': '120 °C',
      'Temp. Cleaning Max': '150 °C',
      'Standard Material': 'Alloy Steel',
    },
    features: [
      'Purpose-built for viscose wet spinning process',
      'Extremely wide displacement range: 0.3–100 cc/rev',
      'Standard, B-type, and SP-type configurations',
      'Suitable for filament yarn and spun fiber',
      'Optional Nitriding and DLC coatings',
      'Models: DMT-VC-0.3CC to DVS001-100CC',
    ],
    popular: false,
    newest: true,
    priceRange: 'premium',
    availability: 'on-order',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // METAL COMPONENTS — external image links (as provided)
  // ─────────────────────────────────────────────────────────────────────────────

  {
    id: 'mc7',
    name: 'Hex Head Bolt',
    category: 'metal-components',
    description:
      'Standard hex head bolt to IS 1364 / IS 12427 / ISO 4017 / DIN 931 — sizes M10 to M24, lengths 20 mm to 210 mm.',
    longDescription:
      'Our Hex Head Bolts conform to IS 1364, IS 12427, ISO 4017, and DIN 931 dimensional standards. Available in a diameter range of M10 to M24 and lengths from 20 mm to 210 mm, these bolts are suitable for general industrial, construction, and OEM fastening applications. Manufactured from high-tensile carbon steel or stainless steel with zinc-plated or plain finish options. Full dimensional traceability and grade markings provided on each batch.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.kQ-o_okXu-kqv3LGdFk0swHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    tags: ['Bolts', 'Hex Head', 'Fasteners', 'DIN 931', 'IS 1364'],
    specifications: {
      Standard: 'IS 1364 / IS 12427 / ISO 4017 / DIN 931',
      'Size (Diameter)': 'M10 – M24',
      Length: '20 mm to 210 mm',
      Material: 'Carbon Steel / Stainless Steel',
    },
    features: [
      'Multiple standard compliance: IS / ISO / DIN',
      'Wide size range M10–M24',
      'Zinc-plated or plain finish',
      'Grade markings on every batch',
      'Bulk supply available',
    ],
    popular: true,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc8',
    name: 'Hex Head Screw',
    category: 'metal-components',
    description:
      'Hex head screw to IS 1364 / ISO 4017 / DIN 933 — sizes M10 to M24, lengths 20 mm to 100 mm.',
    longDescription:
      'Manufactured to IS 1364, ISO 4017, and DIN 933 standards, our Hex Head Screws are fully threaded fasteners suitable for through-bolted and tapped-hole assemblies in industrial and construction applications. Available in M10 to M24 diameter range and lengths from 20 mm to 100 mm. High-tensile carbon steel and stainless steel options; zinc-plated or plain finishes available. Full grade traceability and batch test certificates provided.',
    image: 'https://machinedwasher.com/wp-content/uploads/2025/05/%E5%A4%96%E5%85%AD%E8%A7%92%E8%9E%BA%E4%B8%9D-9-scaled.jpeg',
    tags: ['Screws', 'Hex Head', 'Fasteners', 'DIN 933', 'ISO 4017'],
    specifications: {
      Standard: 'IS 1364 / ISO 4017 / DIN 933',
      'Size (Diameter)': 'M10 – M24',
      Length: '20 mm to 100 mm',
      Material: 'Carbon Steel / Stainless Steel',
    },
    features: [
      'Fully threaded hex head design',
      'IS / ISO / DIN multi-standard compliance',
      'Wide length range 20–100 mm',
      'Zinc-plated or plain finish',
      'Bulk packs available',
    ],
    popular: false,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc9',
    name: 'Socket Head Cap Screw',
    category: 'metal-components',
    description:
      'Alloy steel socket head cap screw to IS 2269 / ISO 4762 / DIN 912 — sizes M10 to M24, lengths 20 mm to 100 mm.',
    longDescription:
      'Our Socket Head Cap Screws comply with IS 2269, ISO 4762, and DIN 912 standards. The internal hex (Allen key) drive allows installation in tight or recessed spaces where a standard spanner cannot reach. Available in M10 to M24 diameter and 20 mm to 100 mm lengths. Manufactured from high-tensile alloy steel (Grade 12.9) with black oxide or zinc-plated finish. Ideal for precision machinery, tooling, jigs, and structural assemblies.',
    image: 'https://mm.digikey.com/Volume0/opasdata/d220001/derivates/1/003/226/203/2168083-3_sml%28200x200%29.jpg',
    tags: ['Screws', 'Socket Head', 'Cap Screw', 'Allen Key', 'DIN 912'],
    specifications: {
      Standard: 'IS 2269 / ISO 4762 / DIN 912',
      'Size (Diameter)': 'M10 – M24',
      Length: '20 mm to 100 mm',
      Material: 'Alloy Steel (Grade 12.9)',
    },
    features: [
      'Internal hex (Allen) drive for recessed access',
      'High-tensile alloy steel Grade 12.9',
      'IS / ISO / DIN multi-standard compliance',
      'Black oxide or zinc-plated finish',
      'Ideal for precision machinery & tooling',
    ],
    popular: true,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc10',
    name: 'Socket Head Cap Bolt',
    category: 'metal-components',
    description:
      'High-tensile socket head cap bolt to IS 2269 / ISO 4762 / DIN 912 — sizes M10 to M24, lengths 20 mm to 210 mm.',
    longDescription:
      'Socket Head Cap Bolts to IS 2269, ISO 4762, and DIN 912 standards, offering the longer length range (up to 210 mm) needed for structural and deep-reach fastening. The internal hex drive maximises wrench access in confined spaces. Available in M10 to M24 diameter, manufactured from high-tensile alloy steel with black oxide or zinc-plated surface treatment. Suitable for heavy engineering, presses, jigs, and high-clamping-force applications.',
    image: 'https://mm.digikey.com/Volume0/opasdata/d220001/derivates/1/200/299/132/H5Z-050-0200-13_sml.jpg',
    tags: ['Bolts', 'Socket Head', 'Cap Bolt', 'Allen Key', 'DIN 912', 'High-Tensile'],
    specifications: {
      Standard: 'IS 2269 / ISO 4762 / DIN 912',
      'Size (Diameter)': 'M10 – M24',
      Length: '20 mm to 210 mm',
      Material: 'Alloy Steel (Grade 12.9)',
    },
    features: [
      'Internal hex drive for tight spaces',
      'Longer lengths up to 210 mm for structural use',
      'High-tensile Grade 12.9',
      'Black oxide or zinc-plated finish',
      'Heavy engineering and press applications',
    ],
    popular: false,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc11',
    name: 'Hex Flange Bolt',
    category: 'metal-components',
    description:
      'Hex flange bolt with integral serrated bearing flange to IS 15582 / ISO 4162 / DIN 6921 — sizes M10 to M24, lengths 20 mm to 210 mm.',
    longDescription:
      'Our Hex Flange Bolts to IS 15582, ISO 4162, and DIN 6921 incorporate an integral flanged washer face under the head, which distributes clamping load over a wider area and prevents loosening due to vibration. The serrated flange provides additional anti-rotation security. Available in M10 to M24 diameter and 20 mm to 210 mm length range. Manufactured from carbon steel or stainless steel with zinc-plated or plain finish. Widely used in automotive assemblies, structural steelwork, and machinery.',
    image: 'https://th.bing.com/th/id/OIP.aOMLFGf4mXMz3MFYPt9VgQHaHa?w=187&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    tags: ['Bolts', 'Flange Bolt', 'DIN 6921', 'Serrated', 'Anti-Vibration'],
    specifications: {
      Standard: 'IS 15582 / ISO 4162 / DIN 6921',
      'Size (Diameter)': 'M10 – M24',
      Length: '20 mm to 210 mm',
      Material: 'Carbon Steel / Stainless Steel',
    },
    features: [
      'Integral serrated flange distributes clamp load',
      'Anti-vibration loosening resistance',
      'No separate washer required',
      'Zinc-plated or plain finish',
      'Suitable for automotive and structural use',
    ],
    popular: false,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc12',
    name: 'Hex Flange Screw',
    category: 'metal-components',
    description:
      'Fully threaded hex flange screw with integral serrated washer face to IS 15582 / ISO 4162 / DIN 6921 — sizes M10 to M24, lengths 20 mm to 100 mm.',
    longDescription:
      'Hex Flange Screws to IS 15582, ISO 4162, and DIN 6921 combine a fully threaded shank with an integral serrated flange face. The flange eliminates the need for a separate washer and provides excellent anti-rotation properties in vibration-prone environments. Available in M10 to M24 diameter and 20–100 mm lengths. Carbon steel or stainless steel with zinc-plated or plain finish. Ideal for automotive panels, light structural assemblies, and equipment housings.',
    image: 'https://tse4.mm.bing.net/th/id/OIP.pwllvZ9FEOK107MzRhuXoQHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3',
    tags: ['Screws', 'Flange Screw', 'DIN 6921', 'Serrated', 'Anti-Vibration'],
    specifications: {
      Standard: 'IS 15582 / ISO 4162 / DIN 6921',
      'Size (Diameter)': 'M10 – M24',
      Length: '20 mm to 100 mm',
      Material: 'Carbon Steel / Stainless Steel',
    },
    features: [
      'Fully threaded with integral serrated flange',
      'Eliminates separate washer requirement',
      'Excellent vibration resistance',
      'Zinc-plated or plain finish',
      'Lightweight assembly applications',
    ],
    popular: false,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc13',
    name: 'Step Bolt',
    category: 'metal-components',
    description:
      'Stepped shank bolt to IS 10238 — M16 diameter, 175 mm length, for railway, construction, and heavy structural applications.',
    longDescription:
      'Step Bolts conforming to IS 10238 are specialised fasteners featuring a stepped-down shank diameter that provides a precision fit within the bolt hole for accurate alignment in structural steelwork, railway track fastening, and heavy construction. Available in M16 diameter and 175 mm length. Manufactured from carbon steel with a hot-dip galvanised or plain finish. Supplied with matching nuts and washers on request.',
    image: 'https://3.imimg.com/data3/NI/XL/MY-1640965/step-bolt-500x500.jpg',
    tags: ['Bolts', 'Step Bolt', 'IS 10238', 'Railway', 'Structural'],
    specifications: {
      Standard: 'IS 10238',
      'Size (Diameter)': 'M16',
      Length: '175 mm',
      Material: 'Carbon Steel',
    },
    features: [
      'Stepped shank for precision hole fit',
      'IS 10238 compliant',
      'Railway and heavy structural use',
      'Hot-dip galvanised or plain finish',
      'Matching nuts and washers available',
    ],
    popular: false,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc14',
    name: 'Flange Button Head Cap Screw',
    category: 'metal-components',
    description:
      'Low-profile button head cap screw with integral flange to ISO 7380-2 — sizes M10 to M24, lengths 20 mm to 100 mm.',
    longDescription:
      'Our Flange Button Head Cap Screws to ISO 7380-2 feature a broad, low-profile dome head with an integral bearing flange and internal hex drive. The wide flange spreads the clamping load without a separate washer and the low head profile suits applications where clearance is limited. Available in M10 to M24 diameter and 20–100 mm lengths. High-tensile alloy steel or stainless steel with black oxide or zinc-plated finish. Suitable for panels, covers, electronics housings, and automotive trim.',
    image: 'https://th.bing.com/th/id/OIP.nwx0nt6TGYS0VmC_XDMM5wHaFp?w=270&h=205&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    tags: ['Screws', 'Button Head', 'Flange', 'Low Profile', 'ISO 7380-2'],
    specifications: {
      Standard: 'ISO 7380-2',
      'Size (Diameter)': 'M10 – M24',
      Length: '20 mm to 100 mm',
      Material: 'Alloy Steel / Stainless Steel',
    },
    features: [
      'Low-profile domed head with integral flange',
      'Internal hex drive',
      'Wide flange eliminates separate washer',
      'Ideal for limited-clearance assemblies',
      'Black oxide or zinc-plated finish',
    ],
    popular: false,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc15',
    name: 'Socket Button Head Cap Screw',
    category: 'metal-components',
    description:
      'Low-profile socket button head cap screw to ISO 7380 / DIN 9427 — sizes M10 to M24, lengths 20 mm to 100 mm.',
    longDescription:
      'Socket Button Head Cap Screws to ISO 7380 and DIN 9427 offer a clean, low-profile head with an internal hex drive that sits nearly flush to the mating surface when fully tightened. Ideal for applications requiring a smooth finished appearance or minimal protrusion. Available in M10–M24 diameter and 20–100 mm lengths. Manufactured from alloy steel or stainless steel with black oxide or plain finish. Common in consumer electronics, instrument panels, and precision assemblies.',
    image: 'https://content.misumi-ec.com/image/upload/t_misumi_wm/t_misumi_wm/v1/p/jp/product/series/110310926999/110310926999_001_20231004140658.jpg',
    tags: ['Screws', 'Button Head', 'Socket', 'ISO 7380', 'DIN 9427', 'Low Profile'],
    specifications: {
      Standard: 'ISO 7380 / DIN 9427',
      'Size (Diameter)': 'M10 – M24',
      Length: '20 mm to 100 mm',
      Material: 'Alloy Steel / Stainless Steel',
    },
    features: [
      'Near-flush low-profile seating',
      'Internal hex drive',
      'Clean finished appearance',
      'Precision and electronic assembly use',
      'Black oxide or plain finish',
    ],
    popular: false,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc16',
    name: 'Socket Low Head Cap Screw',
    category: 'metal-components',
    description:
      'Extra-low profile socket cap screw to DIN 7984 — sizes M10 to M24, lengths 20 mm to 100 mm.',
    longDescription:
      'Socket Low Head Cap Screws to DIN 7984 have a head height roughly half that of a standard socket head cap screw, enabling use in extremely confined spaces without sacrificing the internal hex drive convenience. Available in M10–M24 diameter and 20–100 mm lengths. Alloy steel with black oxide finish as standard; stainless steel option available. Suitable for tight-clearance machine guarding, thin-wall assemblies, and aerospace-adjacent applications.',
    image: 'https://th.bing.com/th/id/OIP.et1ztERn_r_0yv6JpjqUCAHaHa?w=198&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    tags: ['Screws', 'Low Head', 'Socket', 'DIN 7984', 'Tight Clearance'],
    specifications: {
      Standard: 'DIN 7984',
      'Size (Diameter)': 'M10 – M24',
      Length: '20 mm to 100 mm',
      Material: 'Alloy Steel',
    },
    features: [
      '~50% lower head height vs standard socket cap',
      'Internal hex drive retained',
      'Ideal for extremely confined spaces',
      'Black oxide finish standard',
      'Stainless steel option available',
    ],
    popular: false,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc17',
    name: 'Socket CSK Head Screw (Countersunk)',
    category: 'metal-components',
    description:
      'Flush-fit countersunk socket head screw to IS 6761 / ISO 10642 / DIN 7991 — sizes M10 to M24, lengths 20 mm to 100 mm.',
    longDescription:
      'Socket Countersunk (CSK) Head Screws to IS 6761, ISO 10642, and DIN 7991 provide a completely flush or sub-flush installation surface when used with a countersunk hole. The 90° conical underhead geometry and internal hex drive make them suitable for precision assemblies, aerospace structures, jigs and fixtures, and any application where a protruding fastener head is unacceptable. Available in M10–M24 diameter and 20–100 mm lengths from alloy steel (Grade 12.9) or stainless steel with black oxide finish.',
    image: 'https://th.bing.com/th/id/OIP.cOZcB-fpaf5xcxJAY2zu0wHaEy?w=282&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    tags: ['Screws', 'Countersunk', 'CSK', 'Socket', 'DIN 7991', 'Flush Fit'],
    specifications: {
      Standard: 'IS 6761 / ISO 10642 / DIN 7991',
      'Size (Diameter)': 'M10 – M24',
      Length: '20 mm to 100 mm',
      Material: 'Alloy Steel (Grade 12.9) / SS',
    },
    features: [
      'Flush or sub-flush installation',
      '90° conical countersunk head',
      'Internal hex drive',
      'Precision and aerospace assemblies',
      'Black oxide or stainless finish',
    ],
    popular: false,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc18',
    name: 'Hex Flange Nut',
    category: 'metal-components',
    description: 'Hex nut with integral serrated bearing flange to IS 15581 — sizes M10 to M24.',
    longDescription:
      'Hex Flange Nuts to IS 15581 feature an integral flanged washer face with serrations that bite into the mating surface to resist vibration loosening without a separate lock washer. Available in M10 to M24 diameter. Carbon steel or stainless steel with zinc-plated or plain finish. Used alongside hex flange bolts and screws in automotive assemblies, structural steelwork, and industrial machinery where vibration resistance is required.',
    image: 'https://th.bing.com/th/id/OIP.DbRirvSlpLh_fXOIj2nF4QHaEn?w=287&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    tags: ['Nuts', 'Flange Nut', 'IS 15581', 'Serrated', 'Anti-Vibration'],
    specifications: {
      Standard: 'IS 15581',
      'Size (Diameter)': 'M10 – M24',
      Material: 'Carbon Steel / Stainless Steel',
      Finish: 'Zinc-plated / Plain',
    },
    features: [
      'Integral serrated flange face',
      'Vibration-resistant without separate lock washer',
      'IS 15581 compliant',
      'Zinc-plated or plain finish',
      'Bulk supply available',
    ],
    popular: false,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc19',
    name: 'Hex Nut',
    category: 'metal-components',
    description: 'Standard hex nut to IS 1364-3 / IS 14394 — sizes M10 to M24.',
    longDescription:
      'Our standard Hex Nuts comply with IS 1364-3 and IS 14394 dimensional standards. Available in M10 to M24 diameter from carbon steel or stainless steel with zinc-plated or plain finish. These are general-purpose nuts suitable for use with all hex bolts and hex head screws across industrial, construction, and OEM applications. Supplied in bulk packs with full grade traceability.',
    image: 'https://www.bing.com/th?id=OPAC.xZnJBL68pdtsYw474C474&o=5&pid=21.1&w=128&h=128&rs=1&qlt=100&dpr=1.3&o=2&bw=6&bc=FFFFFF',
    tags: ['Nuts', 'Hex Nut', 'IS 1364', 'IS 14394', 'Fasteners'],
    specifications: {
      Standard: 'IS 1364-3 / IS 14394',
      'Size (Diameter)': 'M10 – M24',
      Material: 'Carbon Steel / Stainless Steel',
      Finish: 'Zinc-plated / Plain',
    },
    features: [
      'General purpose hex nut',
      'IS 1364-3 and IS 14394 compliant',
      'Wide size range M10–M24',
      'Carbon steel and SS options',
      'Bulk packs with traceability',
    ],
    popular: true,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc20',
    name: 'Hex Dome Nut (Acorn Nut)',
    category: 'metal-components',
    description: 'Decorative and protective hex dome (acorn) nut to IS 7790 — sizes M10 to M24.',
    longDescription:
      'Hex Dome Nuts (also known as acorn nuts or cap nuts) to IS 7790 feature a domed closed end that covers and protects the exposed bolt thread from corrosion and damage while providing a neat finished appearance. Available in M10 to M24 diameter from carbon steel or stainless steel with zinc-plated or chrome finish. Commonly used in decorative assemblies, vehicle bodywork, handrails, and applications where thread protection and aesthetics matter.',
    image: 'https://th.bing.com/th/id/OIP.CVgGNHC68W1WT7qvy2pWwAHaHa?o=7&rs=1&pid=ImgDetMain&rm=3',
    tags: ['Nuts', 'Dome Nut', 'Acorn Nut', 'IS 7790', 'Decorative'],
    specifications: {
      Standard: 'IS 7790',
      'Size (Diameter)': 'M10 – M24',
      Material: 'Carbon Steel / Stainless Steel',
      Finish: 'Zinc-plated / Chrome / Plain',
    },
    features: [
      'Domed closed end protects exposed threads',
      'Decorative and corrosion-protective',
      'IS 7790 compliant',
      'Zinc-plated or chrome finish',
      'Vehicle and handrail applications',
    ],
    popular: false,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc21',
    name: 'Plain Washer',
    category: 'metal-components',
    description: 'Standard plain (flat) washer to IS 2016 / ISO 7089 / DIN 125 — sizes M10 to M24.',
    longDescription:
      'Our Plain (Flat) Washers conform to IS 2016, ISO 7089, and DIN 125 standards. Available in M10 to M24 sizes from carbon steel or stainless steel with zinc-plated or plain finish. Used to distribute the load of a fastener, prevent surface damage during tightening, and provide a smooth bearing surface. Essential pairing with all bolt and nut assemblies across industrial, construction, and mechanical applications.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/8/440874960/GM/UU/DG/19540658/plain-washer-1000x1000.jpg',
    tags: ['Washers', 'Plain Washer', 'Flat Washer', 'DIN 125', 'IS 2016'],
    specifications: {
      Standard: 'IS 2016 / ISO 7089 / DIN 125',
      'Size (Diameter)': 'M10 – M24',
      Material: 'Carbon Steel / Stainless Steel',
      Finish: 'Zinc-plated / Plain',
    },
    features: [
      'Distributes fastener load over wider area',
      'Prevents surface damage during tightening',
      'IS / ISO / DIN multi-standard compliance',
      'Carbon steel and SS options',
      'Bulk packs available',
    ],
    popular: true,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },

  {
    id: 'mc22',
    name: 'Spring Washer',
    category: 'metal-components',
    description:
      'Split spring lock washer to IS 3063 — sizes M10 to M24, for vibration-resistant fastener assemblies.',
    longDescription:
      'Spring (Split Lock) Washers to IS 3063 provide positive locking action by biting into both the nut and mating surface when the fastener is tightened, resisting loosening due to vibration and dynamic loads. Available in M10 to M24 sizes from carbon steel or stainless steel with zinc-plated or plain finish. Used in general machinery, automotive, and structural assemblies where positive retention of fasteners under vibration is required.',
    image: 'https://th.bing.com/th/id/OIP.ZZoiag60FyhbJmPnMruUWQHaHa?w=137&h=108&c=7&qlt=90&bgcl=839650&r=0&o=6&dpr=1.3&pid=13.1',
    tags: ['Washers', 'Spring Washer', 'Lock Washer', 'IS 3063', 'Anti-Vibration'],
    specifications: {
      Standard: 'IS 3063',
      'Size (Diameter)': 'M10 – M24',
      Material: 'Carbon Steel / Stainless Steel',
      Finish: 'Zinc-plated / Plain',
    },
    features: [
      'Split lock design bites into mating surfaces',
      'Resists loosening under vibration',
      'IS 3063 compliant',
      'Carbon steel and SS options',
      'General machinery and automotive use',
    ],
    popular: false,
    newest: false,
    priceRange: 'budget',
    availability: 'in-stock',
  },
];

export const categoryMeta = {
  machineries: {
    label: 'Machineries',
    description:
      'Industrial-grade machines for manufacturing, fabrication, and production environments worldwide.',
    icon: 'Cog',
    image: ma2,
    color: 'from-blue-900 to-blue-700',
  },
  'metal-components': {
    label: 'Metal Components',
    description:
      'Precision-engineered metal parts, structural steel, and fasteners for every industrial need.',
    icon: 'Wrench',
    image:
      'https://tse3.mm.bing.net/th/id/OIP.kQ-o_okXu-kqv3LGdFk0swHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    color: 'from-slate-800 to-slate-600',
  },

  'common-products': {
    label: 'Common Products',
    description:
      'Essential industrial supplies, safety equipment, tools, and consumables for daily operations.',
    icon: 'Package',
    image:
      'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-amber-800 to-amber-600',
  },
};