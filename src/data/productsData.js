// Centralized product data for Metabond
// This data structure includes all information needed for product display pages

export const productsData = {
  1: {
    id: 1,
    name: 'Metabond S1',
    category: 'Structural Epoxy Adhesive',
    tagline: 'High-strength bonding for critical applications',
    tag: 'Structural epoxy',
    icon: '🧪',
    description: 'Metabond S1 is a two-component, high-performance structural epoxy adhesive designed for demanding industrial applications. It provides exceptional bond strength, superior chemical resistance, and outstanding durability in the harshest environments.',
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&flip=h',
    ],
    features: [
      'Superior tensile and shear strength',
      'Excellent chemical and solvent resistance',
      'Low shrinkage during curing',
      'Temperature resistant up to 150°C',
      'Gap-filling properties',
      'Suitable for vertical applications'
    ],
    specifications: {
      'Mix Ratio': '2:1 by weight (Resin:Hardener)',
      'Pot Life': '30 minutes at 25°C',
      'Working Time': '20 minutes',
      'Initial Cure': '6-8 hours at 25°C',
      'Full Cure': '7 days at 25°C',
      'Tensile Strength': '25-30 MPa',
      'Shear Strength': '18-22 MPa',
      'Temperature Range': '-40°C to +150°C',
      'Viscosity': '15,000-20,000 cP',
      'Color': 'Grey',
      'Shelf Life': '12 months (unopened)'
    },
    applications: [
      'Aerospace component assembly',
      'Automotive structural bonding',
      'Marine construction and repair',
      'Industrial equipment assembly',
      'Metal to metal bonding',
      'Composite panel bonding'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Surface Preparation',
        description: 'Clean surfaces thoroughly to remove oil, grease, dust, and loose particles. Roughen smooth surfaces with sandpaper or grit blasting for better adhesion. Ensure surfaces are completely dry.',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400'
      },
      {
        step: 2,
        title: 'Mixing',
        description: 'Mix resin and hardener in the correct ratio (2:1 by weight). Stir thoroughly for 2-3 minutes ensuring complete homogeneity. Use within the pot life of 30 minutes.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400'
      },
      {
        step: 3,
        title: 'Application',
        description: 'Apply a thin, even layer to one or both surfaces. Assemble parts within the working time. Apply pressure or clamping to ensure good contact. Remove excess adhesive immediately.',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&flip=h'
      },
      {
        step: 4,
        title: 'Curing',
        description: 'Allow to cure at room temperature for 6-8 hours for initial strength. Full cure is achieved in 7 days. For faster curing, heat at 60°C for 2-4 hours. Do not disturb during curing.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&flip=v'
      }
    ],
    packaging: [
      '250g kit (Resin + Hardener)',
      '1kg kit (Resin + Hardener)',
      '5kg kit (Resin + Hardener)',
      '20kg kit (Resin + Hardener)'
    ],
    downloads: [
      { name: 'Technical Data Sheet', type: 'PDF', size: '245 KB' },
      { name: 'Safety Data Sheet (SDS)', type: 'PDF', size: '189 KB' },
      { name: 'Application Guide', type: 'PDF', size: '1.2 MB' },
      { name: 'Product Brochure', type: 'PDF', size: '3.5 MB' }
    ],
    relatedProducts: [2, 3, 6]
  },
  2: {
    id: 2,
    name: 'Metabond S2',
    category: 'High-Temperature Adhesive',
    tagline: 'Withstands extreme temperatures up to 250°C',
    tag: 'High-temp adhesive',
    icon: '🔥',
    description: 'Metabond S2 is an advanced high-temperature epoxy adhesive engineered for applications requiring exceptional thermal stability. Ideal for automotive, aerospace, and industrial applications where elevated temperatures are encountered.',
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&sat=-50',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&sat=-50',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&flip=h&sat=-50',
    ],
    features: [
      'Temperature resistant up to 250°C',
      'Excellent thermal cycling resistance',
      'Low thermal expansion',
      'High bond strength retention at elevated temperatures',
      'Good chemical resistance',
      'Minimal outgassing'
    ],
    specifications: {
      'Mix Ratio': '1:1 by volume',
      'Pot Life': '45 minutes at 25°C',
      'Working Time': '30 minutes',
      'Initial Cure': '4 hours at 80°C',
      'Full Cure': '2 hours at 150°C',
      'Tensile Strength': '20-25 MPa',
      'Shear Strength': '15-18 MPa',
      'Temperature Range': '-55°C to +250°C',
      'Viscosity': '25,000-30,000 cP',
      'Color': 'Black',
      'Shelf Life': '18 months (unopened)'
    },
    applications: [
      'Engine component bonding',
      'Exhaust system assembly',
      'High-temperature sealing',
      'Electronics heat sink bonding',
      'Turbine blade repair',
      'Furnace component bonding'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Surface Preparation',
        description: 'Degrease all surfaces using appropriate solvents. Abrade surfaces with 80-120 grit sandpaper. Remove all dust and contaminants. Ensure surfaces are completely dry before application.',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&sat=-50'
      },
      {
        step: 2,
        title: 'Mixing',
        description: 'Dispense equal volumes of Part A and Part B. Mix thoroughly for 3-4 minutes until uniform color is achieved. Use clean mixing equipment to avoid contamination.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&sat=-50'
      },
      {
        step: 3,
        title: 'Application',
        description: 'Apply mixed adhesive to prepared surfaces within working time. Assemble components with appropriate pressure. Remove excess material before curing begins.',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&flip=h&sat=-50'
      },
      {
        step: 4,
        title: 'Curing',
        description: 'For best results, cure at 150°C for 2 hours. Alternative: 80°C for 4 hours followed by post-cure at 150°C for 1 hour. Allow to cool gradually to room temperature.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&flip=v&sat=-50'
      }
    ],
    packaging: [
      '100g kit (Part A + Part B)',
      '500g kit (Part A + Part B)',
      '2kg kit (Part A + Part B)',
      '10kg kit (Part A + Part B)'
    ],
    downloads: [
      { name: 'Technical Data Sheet', type: 'PDF', size: '268 KB' },
      { name: 'Safety Data Sheet (SDS)', type: 'PDF', size: '195 KB' },
      { name: 'High-Temperature Application Guide', type: 'PDF', size: '1.8 MB' },
      { name: 'Product Brochure', type: 'PDF', size: '2.9 MB' }
    ],
    relatedProducts: [1, 4, 6]
  },
  3: {
    id: 3,
    name: 'Metabond S3',
    category: 'Fast Cure Adhesive',
    tagline: '15-minute set time for rapid assembly',
    tag: 'Fast cure adhesive',
    icon: '⚡',
    description: 'Metabond S3 is a rapid-curing adhesive formulated for applications requiring quick turnaround. Perfect for production lines and repair work where downtime must be minimized.',
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&hue=90',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&hue=90',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&flip=h&hue=90',
    ],
    features: [
      'Rapid 15-minute set time',
      'Full cure in 1 hour',
      'High initial grab strength',
      'Easy to mix and apply',
      'Low odor formulation',
      'Excellent adhesion to various substrates'
    ],
    specifications: {
      'Mix Ratio': '1:1 by volume',
      'Pot Life': '5 minutes at 25°C',
      'Working Time': '3-4 minutes',
      'Initial Cure': '15 minutes at 25°C',
      'Full Cure': '1 hour at 25°C',
      'Tensile Strength': '18-22 MPa',
      'Shear Strength': '12-15 MPa',
      'Temperature Range': '-20°C to +80°C',
      'Viscosity': '8,000-12,000 cP',
      'Color': 'Clear',
      'Shelf Life': '12 months (unopened)'
    },
    applications: [
      'Rapid assembly operations',
      'Emergency repairs',
      'Production line bonding',
      'Prototyping and R&D',
      'Maintenance work',
      'Quick fixture applications'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Surface Preparation',
        description: 'Quickly clean and dry surfaces. For best results, lightly abrade with fine sandpaper. Ensure surfaces are free from contaminants.',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&hue=90'
      },
      {
        step: 2,
        title: 'Mixing',
        description: 'Mix equal parts A and B quickly but thoroughly. You have only 3-4 minutes working time. Prepare only the amount you can use immediately.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&hue=90'
      },
      {
        step: 3,
        title: 'Application',
        description: 'Apply immediately after mixing. Assemble parts quickly. Hold or clamp for at least 15 minutes. Adhesive will be handling-ready after this time.',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&flip=h&hue=90'
      },
      {
        step: 4,
        title: 'Curing',
        description: 'Initial set in 15 minutes. Full mechanical strength achieved in 1 hour at room temperature. Can be put into service immediately after full cure.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&flip=v&hue=90'
      }
    ],
    packaging: [
      '50ml dual cartridge',
      '200ml dual cartridge',
      '400ml dual cartridge'
    ],
    downloads: [
      { name: 'Technical Data Sheet', type: 'PDF', size: '223 KB' },
      { name: 'Safety Data Sheet (SDS)', type: 'PDF', size: '176 KB' },
      { name: 'Quick Start Guide', type: 'PDF', size: '890 KB' }
    ],
    relatedProducts: [1, 2, 9]
  },
  4: {
    id: 4,
    name: 'Metabond S4',
    category: 'Automotive Grade Adhesive',
    tagline: 'OEM-approved for vehicle manufacturing',
    tag: 'Automotive grade',
    icon: '🚗',
    description: 'Metabond S4 is an OEM-approved automotive adhesive specifically designed for vehicle assembly and manufacturing. It meets stringent automotive industry standards and provides reliable bonding for critical automotive components.',
    images: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800',
    ],
    features: [
      'OEM-approved formulation',
      'Vibration and impact resistance',
      'Oil and fuel resistant',
      'Wide temperature operating range',
      'Fast fixture time',
      'Low VOC emissions'
    ],
    specifications: {
      'Mix Ratio': '10:1 by weight',
      'Pot Life': '20 minutes at 25°C',
      'Working Time': '15 minutes',
      'Initial Cure': '30 minutes at 25°C',
      'Full Cure': '24 hours at 25°C',
      'Tensile Strength': '22-26 MPa',
      'Shear Strength': '16-20 MPa',
      'Temperature Range': '-40°C to +120°C',
      'Viscosity': '18,000-22,000 cP',
      'Color': 'Black',
      'Shelf Life': '18 months (unopened)'
    },
    applications: [
      'Vehicle body assembly',
      'Interior trim bonding',
      'Dashboard assembly',
      'Door panel attachment',
      'Windshield bonding',
      'Underbody sealing'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Surface Preparation',
        description: 'Clean all surfaces with automotive-grade cleaner. Remove oil, grease, and contaminants. Wipe dry with lint-free cloth.',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400'
      },
      {
        step: 2,
        title: 'Mixing',
        description: 'Mix 10 parts resin with 1 part hardener thoroughly. Use within 15-minute working time. Mix only required amount.',
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400'
      },
      {
        step: 3,
        title: 'Application',
        description: 'Apply adhesive using applicator gun or spatula. Assemble parts and apply pressure. Initial fixture in 30 minutes.',
        image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400'
      },
      {
        step: 4,
        title: 'Curing',
        description: 'Allow 24 hours for full cure at room temperature. Parts can be handled after 2 hours. Avoid stress during curing.',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&flip=h'
      }
    ],
    packaging: [
      '310ml dual cartridge',
      '600ml dual cartridge',
      '20L bulk container'
    ],
    downloads: [
      { name: 'Technical Data Sheet', type: 'PDF', size: '256 KB' },
      { name: 'Safety Data Sheet (SDS)', type: 'PDF', size: '182 KB' },
      { name: 'OEM Approval Certificate', type: 'PDF', size: '1.1 MB' }
    ],
    relatedProducts: [1, 2, 8]
  },
  5: {
    id: 5,
    name: 'Metabond S5',
    category: 'Construction Sealant',
    tagline: 'Weather-resistant for building exteriors',
    tag: 'Construction sealant',
    icon: '🏗️',
    description: 'Metabond S5 is a premium construction sealant designed for exterior building applications. Provides superior weather resistance, UV stability, and long-lasting flexibility for demanding construction projects.',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800',
    ],
    features: [
      'Superior weather resistance',
      'UV stable formulation',
      'Excellent adhesion to common substrates',
      'Paintable after curing',
      'Flexible joint movement',
      'Mold and mildew resistant'
    ],
    specifications: {
      'Type': 'One-component polyurethane',
      'Skin Time': '25-35 minutes',
      'Tack-Free Time': '2-3 hours',
      'Full Cure': '7 days',
      'Shore A Hardness': '35-45',
      'Movement Capability': '±25%',
      'Temperature Range': '-40°C to +80°C',
      'Elongation': '400%',
      'Color': 'White, Grey, Black',
      'Shelf Life': '12 months (unopened)'
    },
    applications: [
      'Expansion joints',
      'Curtain wall sealing',
      'Window and door perimeters',
      'Facade panel joints',
      'Roof flashing',
      'Concrete joints'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Surface Preparation',
        description: 'Ensure joints are clean, dry, and free from dust, oil, and loose material. Use backing rod if joint depth exceeds width.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400'
      },
      {
        step: 2,
        title: 'Priming (if required)',
        description: 'Apply primer to porous substrates. Allow primer to dry as per manufacturer instructions before sealant application.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400'
      },
      {
        step: 3,
        title: 'Application',
        description: 'Cut nozzle to desired bead size. Apply sealant in continuous bead. Tool immediately for proper adhesion and finish.',
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400'
      },
      {
        step: 4,
        title: 'Curing',
        description: 'Allow to cure undisturbed. Skin forms in 30 minutes. Full cure in 7 days. Protect from rain during initial cure.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&flip=h'
      }
    ],
    packaging: [
      '300ml cartridge',
      '600ml sausage pack',
      '20L pail'
    ],
    downloads: [
      { name: 'Technical Data Sheet', type: 'PDF', size: '238 KB' },
      { name: 'Safety Data Sheet (SDS)', type: 'PDF', size: '191 KB' },
      { name: 'Joint Design Guide', type: 'PDF', size: '2.4 MB' }
    ],
    relatedProducts: [1, 6, 9]
  },
  6: {
    id: 6,
    name: 'Metabond S6',
    category: 'Chemical Resistant Adhesive',
    tagline: 'Protects against acids and solvents',
    tag: 'Chemical resistant',
    icon: '🧴',
    description: 'Metabond S6 offers exceptional resistance to a wide range of chemicals, acids, and solvents. Ideal for industrial environments where chemical exposure is a concern, providing long-lasting protection and bonding.',
    images: [
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800',
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800',
      'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800',
    ],
    features: [
      'Excellent chemical resistance',
      'Resistant to acids and alkalis',
      'Solvent resistant',
      'High mechanical strength',
      'Low water absorption',
      'Thermal shock resistant'
    ],
    specifications: {
      'Mix Ratio': '1:1 by weight',
      'Pot Life': '40 minutes at 25°C',
      'Working Time': '30 minutes',
      'Initial Cure': '8 hours at 25°C',
      'Full Cure': '7 days at 25°C',
      'Tensile Strength': '28-32 MPa',
      'Shear Strength': '20-24 MPa',
      'Temperature Range': '-30°C to +130°C',
      'Viscosity': '22,000-28,000 cP',
      'Color': 'Clear/Amber',
      'Shelf Life': '24 months (unopened)'
    },
    applications: [
      'Chemical processing equipment',
      'Laboratory fixtures',
      'Storage tank lining',
      'Acid-resistant flooring',
      'Pipe bonding and sealing',
      'Containment bund construction'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Surface Preparation',
        description: 'Degrease surfaces thoroughly with appropriate solvent. Abrade with 80-100 grit. Remove all contamination. Dry completely.',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400'
      },
      {
        step: 2,
        title: 'Mixing',
        description: 'Mix equal parts A and B for 3-4 minutes until uniform. Scrape sides and bottom. Use within 30-minute working time.',
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400'
      },
      {
        step: 3,
        title: 'Application',
        description: 'Apply mixed adhesive to prepared surfaces. Assemble and clamp. Remove excess immediately. Avoid movement during cure.',
        image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400'
      },
      {
        step: 4,
        title: 'Curing',
        description: 'Cure 8 hours for handling strength. Full chemical resistance after 7 days. Heat cure at 60°C for 4 hours if required.',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&flip=h'
      }
    ],
    packaging: [
      '500g kit',
      '2kg kit',
      '10kg kit'
    ],
    downloads: [
      { name: 'Technical Data Sheet', type: 'PDF', size: '271 KB' },
      { name: 'Safety Data Sheet (SDS)', type: 'PDF', size: '203 KB' },
      { name: 'Chemical Resistance Chart', type: 'PDF', size: '1.7 MB' }
    ],
    relatedProducts: [1, 2, 5]
  },
  7: {
    id: 7,
    name: 'Metabond S7',
    category: 'Electronics Grade Adhesive',
    tagline: 'ESD-safe for sensitive components',
    tag: 'Electronics grade',
    icon: '🔌',
    description: 'Metabond S7 is specially formulated for electronics assembly with ESD-safe properties. Provides reliable bonding for sensitive electronic components while preventing electrostatic discharge damage.',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
      'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800',
      'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=800',
    ],
    features: [
      'ESD-safe formulation',
      'Low ionic contamination',
      'Excellent electrical insulation',
      'Thermal conductivity option',
      'Low outgassing',
      'Precision dispensing compatible'
    ],
    specifications: {
      'Mix Ratio': '100:10 by weight',
      'Pot Life': '2-4 hours at 25°C',
      'Working Time': '90 minutes',
      'Initial Cure': '4 hours at 60°C',
      'Full Cure': '24 hours at 25°C',
      'Tensile Strength': '15-20 MPa',
      'Dielectric Strength': '18-20 kV/mm',
      'Temperature Range': '-40°C to +150°C',
      'Viscosity': '5,000-8,000 cP',
      'Color': 'Transparent',
      'Shelf Life': '6 months (refrigerated)'
    },
    applications: [
      'PCB component bonding',
      'Semiconductor packaging',
      'LED assembly',
      'Sensor mounting',
      'Display bonding',
      'Connector potting'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Surface Preparation',
        description: 'Clean surfaces with IPA or electronics cleaner. Ensure ESD-safe work environment. Components must be dry and dust-free.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400'
      },
      {
        step: 2,
        title: 'Mixing',
        description: 'Mix 100:10 ratio precisely. Stir gently to avoid air bubbles. Degas if required. Use within 90-minute working time.',
        image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400'
      },
      {
        step: 3,
        title: 'Application',
        description: 'Dispense using precision equipment. Apply small, controlled amounts. Avoid contamination. Position components accurately.',
        image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=400'
      },
      {
        step: 4,
        title: 'Curing',
        description: 'Cure at 60°C for 4 hours for production. Room temperature cure takes 24 hours. Avoid moisture during cure.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&flip=h'
      }
    ],
    packaging: [
      '50g kit',
      '250g kit',
      '1kg kit'
    ],
    downloads: [
      { name: 'Technical Data Sheet', type: 'PDF', size: '247 KB' },
      { name: 'Safety Data Sheet (SDS)', type: 'PDF', size: '188 KB' },
      { name: 'ESD Handling Guide', type: 'PDF', size: '1.3 MB' }
    ],
    relatedProducts: [3, 9, 10]
  },
  8: {
    id: 8,
    name: 'Metabond S8',
    category: 'Marine Adhesive',
    tagline: 'Salt water and UV resistant',
    tag: 'Marine adhesive',
    icon: '⚓',
    description: 'Metabond S8 is engineered for harsh marine environments with exceptional resistance to saltwater, UV radiation, and constant moisture. Perfect for boat building, marine equipment, and offshore applications.',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800',
    ],
    features: [
      'Saltwater immersion resistant',
      'UV stabilized',
      'Excellent water resistance',
      'Flexible bond line',
      'Corrosion resistant',
      'Temperature cycling resistant'
    ],
    specifications: {
      'Type': 'Two-component polyurethane',
      'Mix Ratio': '2:1 by volume',
      'Pot Life': '35 minutes at 25°C',
      'Working Time': '25 minutes',
      'Initial Cure': '12 hours at 25°C',
      'Full Cure': '7 days',
      'Tensile Strength': '16-20 MPa',
      'Shore A Hardness': '60-70',
      'Temperature Range': '-30°C to +90°C',
      'Viscosity': '30,000-40,000 cP',
      'Color': 'White',
      'Shelf Life': '12 months (unopened)'
    },
    applications: [
      'Boat hull assembly',
      'Deck to hull bonding',
      'Marine equipment mounting',
      'Porthole sealing',
      'Offshore structure bonding',
      'Underwater repairs'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Surface Preparation',
        description: 'Clean surfaces removing salt deposits, marine growth, and contaminants. Sand with 80-120 grit. Wipe with solvent and dry.',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400'
      },
      {
        step: 2,
        title: 'Mixing',
        description: 'Mix 2 parts A with 1 part B thoroughly for 3 minutes. Stir slowly to minimize air entrapment. Use within 25 minutes.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400'
      },
      {
        step: 3,
        title: 'Application',
        description: 'Apply generous bead to both surfaces. Assemble and clamp firmly. Remove excess with solvent before cure begins.',
        image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=400'
      },
      {
        step: 4,
        title: 'Curing',
        description: 'Allow 12 hours minimum before handling. Full cure in 7 days. Avoid water immersion during initial 24 hours.',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&flip=h'
      }
    ],
    packaging: [
      '300ml dual cartridge',
      '900ml dual cartridge',
      '5L kit'
    ],
    downloads: [
      { name: 'Technical Data Sheet', type: 'PDF', size: '262 KB' },
      { name: 'Safety Data Sheet (SDS)', type: 'PDF', size: '197 KB' },
      { name: 'Marine Application Guide', type: 'PDF', size: '2.1 MB' }
    ],
    relatedProducts: [4, 5, 9]
  },
  9: {
    id: 9,
    name: 'Metabond S9',
    category: 'Flexible Bonding Adhesive',
    tagline: 'Maintains elasticity under stress',
    tag: 'Flexible bonding',
    icon: '🧵',
    description: 'Metabond S9 provides flexible bonding that absorbs vibration and movement. Ideal for applications requiring permanent elasticity and accommodation of thermal expansion and contraction.',
    images: [
      'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    features: [
      'Permanent flexibility',
      'Vibration dampening',
      'High elongation',
      'Impact resistance',
      'Stress distribution',
      'Multi-substrate bonding'
    ],
    specifications: {
      'Type': 'Modified silicone',
      'Skin Time': '15-20 minutes',
      'Tack-Free Time': '60 minutes',
      'Full Cure': '24 hours',
      'Shore A Hardness': '25-35',
      'Elongation': '600%',
      'Temperature Range': '-50°C to +200°C',
      'Tensile Strength': '1.5-2.0 MPa',
      'Movement Capability': '±50%',
      'Color': 'Grey',
      'Shelf Life': '12 months (unopened)'
    },
    applications: [
      'Expansion joints',
      'Vibration isolation',
      'Gasket replacement',
      'Panel bonding',
      'HVAC ductwork',
      'Transportation applications'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Surface Preparation',
        description: 'Clean and dry all surfaces. Remove oils, dust, and loose material. No primer required for most substrates.',
        image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400'
      },
      {
        step: 2,
        title: 'Application',
        description: 'Cut nozzle to desired size. Apply continuous bead. One-component system - no mixing required. Ready to use.',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400'
      },
      {
        step: 3,
        title: 'Assembly',
        description: 'Assemble parts within open time. Apply light pressure to ensure contact. Tool or smooth if required.',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400'
      },
      {
        step: 4,
        title: 'Curing',
        description: 'Skins in 15-20 minutes. Tack-free in 1 hour. Full properties in 24 hours. Cures from outside in.',
        image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&flip=h'
      }
    ],
    packaging: [
      '290ml cartridge',
      '600ml sausage',
      '20L pail'
    ],
    downloads: [
      { name: 'Technical Data Sheet', type: 'PDF', size: '234 KB' },
      { name: 'Safety Data Sheet (SDS)', type: 'PDF', size: '179 KB' },
      { name: 'Flexible Joint Design Guide', type: 'PDF', size: '1.9 MB' }
    ],
    relatedProducts: [3, 5, 8]
  },
  10: {
    id: 10,
    name: 'Metabond S10',
    category: 'Specialty Formulation',
    tagline: 'Custom chemistry for unique needs',
    tag: 'Specialty formulation',
    icon: '🔬',
    description: 'Metabond S10 represents our specialty formulation line with custom chemistry tailored for unique applications. Combines multiple performance characteristics for specialized industrial requirements.',
    images: [
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
      'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800',
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800',
    ],
    features: [
      'Multi-functional properties',
      'Custom color options',
      'Tailored cure profiles',
      'Specialty substrate bonding',
      'Unique performance characteristics',
      'Application-specific formulation'
    ],
    specifications: {
      'Mix Ratio': 'Custom (consult TDS)',
      'Pot Life': '15-60 minutes',
      'Working Time': 'Varies',
      'Initial Cure': '1-8 hours',
      'Full Cure': '24 hours - 7 days',
      'Tensile Strength': '10-35 MPa',
      'Shear Strength': '8-25 MPa',
      'Temperature Range': '-60°C to +180°C',
      'Viscosity': 'Custom',
      'Color': 'Custom available',
      'Shelf Life': '6-18 months'
    },
    applications: [
      'Specialized industrial bonding',
      'Research and development',
      'Custom OEM applications',
      'Prototype assembly',
      'Niche market requirements',
      'Special project applications'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Contact technical support for specific application requirements. Obtain custom application instructions and material compatibility data.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400'
      },
      {
        step: 2,
        title: 'Surface Preparation',
        description: 'Follow substrate-specific preparation guidelines. Test on small area first. Ensure compatibility with all materials.',
        image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400'
      },
      {
        step: 3,
        title: 'Application',
        description: 'Follow custom application instructions provided. Maintain specified environmental conditions. Use recommended application equipment.',
        image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400'
      },
      {
        step: 4,
        title: 'Curing',
        description: 'Follow specified cure schedule. Maintain required temperature and humidity. Verify cure completion before loading.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&flip=h'
      }
    ],
    packaging: [
      'Custom packaging available',
      'Minimum order quantities apply',
      'Bulk options for volume users'
    ],
    downloads: [
      { name: 'Technical Data Sheet', type: 'PDF', size: '251 KB' },
      { name: 'Safety Data Sheet (SDS)', type: 'PDF', size: '194 KB' },
      { name: 'Custom Solutions Guide', type: 'PDF', size: '2.7 MB' },
      { name: 'Technical Support Contact Info', type: 'PDF', size: '156 KB' }
    ],
    relatedProducts: [1, 3, 7]
  }
};

// Helper function to get product by ID
export const getProductById = (id) => {
  return productsData[id] || productsData[1];
};

// Helper function to get all products as array
export const getAllProducts = () => {
  return Object.values(productsData).map(product => ({
    id: product.id,
    name: product.name,
    tag: product.tag,
    icon: product.icon,
    desc: product.tagline
  }));
};

// Helper function to get related products
export const getRelatedProducts = (productId) => {
  const product = productsData[productId];
  if (!product || !product.relatedProducts) return [];
  
  return product.relatedProducts
    .map(id => {
      const relatedProduct = productsData[id];
      if (!relatedProduct) return null; // Skip if product doesn't exist
      return {
        id: relatedProduct.id,
        name: relatedProduct.name,
        tag: relatedProduct.tag
      };
    })
    .filter(product => product !== null); // Remove null entries
};
