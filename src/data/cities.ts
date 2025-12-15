// Top 200 US cities for concrete leveling programmatic SEO
// Organized by state for easy management

export const cities = [
    // Texas (Major markets)
    { slug: 'austin-tx', name: 'Austin', state: 'TX', population: 961855 },
    { slug: 'houston-tx', name: 'Houston', state: 'TX', population: 2304580 },
    { slug: 'dallas-tx', name: 'Dallas', state: 'TX', population: 1304379 },
    { slug: 'san-antonio-tx', name: 'San Antonio', state: 'TX', population: 1434625 },
    { slug: 'fort-worth-tx', name: 'Fort Worth', state: 'TX', population: 918915 },
    { slug: 'el-paso-tx', name: 'El Paso', state: 'TX', population: 678815 },
    { slug: 'arlington-tx', name: 'Arlington', state: 'TX', population: 394266 },
    { slug: 'plano-tx', name: 'Plano', state: 'TX', population: 285494 },

    // California
    { slug: 'los-angeles-ca', name: 'Los Angeles', state: 'CA', population: 3898747 },
    { slug: 'san-diego-ca', name: 'San Diego', state: 'CA', population: 1386932 },
    { slug: 'san-jose-ca', name: 'San Jose', state: 'CA', population: 1013240 },
    { slug: 'san-francisco-ca', name: 'San Francisco', state: 'CA', population: 873965 },
    { slug: 'fresno-ca', name: 'Fresno', state: 'CA', population: 542107 },
    { slug: 'sacramento-ca', name: 'Sacramento', state: 'CA', population: 524943 },
    { slug: 'long-beach-ca', name: 'Long Beach', state: 'CA', population: 466742 },
    { slug: 'oakland-ca', name: 'Oakland', state: 'CA', population: 440646 },

    // Florida
    { slug: 'jacksonville-fl', name: 'Jacksonville', state: 'FL', population: 949611 },
    { slug: 'miami-fl', name: 'Miami', state: 'FL', population: 442241 },
    { slug: 'tampa-fl', name: 'Tampa', state: 'FL', population: 384959 },
    { slug: 'orlando-fl', name: 'Orlando', state: 'FL', population: 307573 },
    { slug: 'st-petersburg-fl', name: 'St. Petersburg', state: 'FL', population: 258308 },

    // Arizona
    { slug: 'phoenix-az', name: 'Phoenix', state: 'AZ', population: 1608139 },
    { slug: 'tucson-az', name: 'Tucson', state: 'AZ', population: 542629 },
    { slug: 'mesa-az', name: 'Mesa', state: 'AZ', population: 504258 },
    { slug: 'chandler-az', name: 'Chandler', state: 'AZ', population: 275987 },

    // Illinois
    { slug: 'chicago-il', name: 'Chicago', state: 'IL', population: 2746388 },
    { slug: 'aurora-il', name: 'Aurora', state: 'IL', population: 180542 },

    // Ohio
    { slug: 'columbus-oh', name: 'Columbus', state: 'OH', population: 905748 },
    { slug: 'cleveland-oh', name: 'Cleveland', state: 'OH', population: 372624 },
    { slug: 'cincinnati-oh', name: 'Cincinnati', state: 'OH', population: 309317 },

    // North Carolina
    { slug: 'charlotte-nc', name: 'Charlotte', state: 'NC', population: 874579 },
    { slug: 'raleigh-nc', name: 'Raleigh', state: 'NC', population: 467665 },

    // Indiana
    { slug: 'indianapolis-in', name: 'Indianapolis', state: 'IN', population: 887642 },

    // Washington
    { slug: 'seattle-wa', name: 'Seattle', state: 'WA', population: 749256 },

    // Colorado
    { slug: 'denver-co', name: 'Denver', state: 'CO', population: 715522 },
    { slug: 'colorado-springs-co', name: 'Colorado Springs', state: 'CO', population: 478961 },

    // Tennessee
    { slug: 'nashville-tn', name: 'Nashville', state: 'TN', population: 689447 },
    { slug: 'memphis-tn', name: 'Memphis', state: 'TN', population: 633104 },

    // Oklahoma
    { slug: 'oklahoma-city-ok', name: 'Oklahoma City', state: 'OK', population: 681054 },
    { slug: 'tulsa-ok', name: 'Tulsa', state: 'OK', population: 413066 },

    // Nevada
    { slug: 'las-vegas-nv', name: 'Las Vegas', state: 'NV', population: 641903 },

    // Oregon
    { slug: 'portland-or', name: 'Portland', state: 'OR', population: 652503 },

    // Wisconsin
    { slug: 'milwaukee-wi', name: 'Milwaukee', state: 'WI', population: 577222 },

    // New Mexico
    { slug: 'albuquerque-nm', name: 'Albuquerque', state: 'NM', population: 564559 },

    // Kansas
    { slug: 'wichita-ks', name: 'Wichita', state: 'KS', population: 397532 },

    // Virginia
    { slug: 'virginia-beach-va', name: 'Virginia Beach', state: 'VA', population: 459470 },

    // Georgia
    { slug: 'atlanta-ga', name: 'Atlanta', state: 'GA', population: 498715 },

    // Nebraska
    { slug: 'omaha-ne', name: 'Omaha', state: 'NE', population: 486051 },

    // Minnesota
    { slug: 'minneapolis-mn', name: 'Minneapolis', state: 'MN', population: 429954 },

    // Louisiana
    { slug: 'new-orleans-la', name: 'New Orleans', state: 'LA', population: 383997 },

    // Missouri
    { slug: 'kansas-city-mo', name: 'Kansas City', state: 'MO', population: 508090 },
    { slug: 'st-louis-mo', name: 'St. Louis', state: 'MO', population: 301578 },

    // Pennsylvania
    { slug: 'philadelphia-pa', name: 'Philadelphia', state: 'PA', population: 1584064 },
    { slug: 'pittsburgh-pa', name: 'Pittsburgh', state: 'PA', population: 302971 },

    // Michigan
    { slug: 'detroit-mi', name: 'Detroit', state: 'MI', population: 639111 },

    // Massachusetts
    { slug: 'boston-ma', name: 'Boston', state: 'MA', population: 675647 },

    // New York
    { slug: 'new-york-ny', name: 'New York', state: 'NY', population: 8336817 },

    // Add 150+ more cities for maximum coverage
    // This is just the foundation - expand to cover all major metros
];

export type City = typeof cities[0];
