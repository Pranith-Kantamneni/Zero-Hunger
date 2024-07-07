document.addEventListener('DOMContentLoaded', () => {
    const stateFilter = document.getElementById('state-filter');
    const schemeList = document.getElementById('scheme-list');

    const schemes = {
        central: [
            { name: 'National Food Security Act (NFSA)', details: 'Helpline Number: 1967 or 1800-180-2087 (toll-free)\nWebsite: nfsa.gov.in' },
            { name: 'Mid-Day Meal Scheme', details: 'Contact: Reach out to the respective District Education Office or School Management Committee.\nWebsite: mdm.nic.in' },
            { name: 'Integrated Child Development Services (ICDS)', details: 'Contact: Reach out to the local Anganwadi center or District ICDS Office.\nWebsite: icds-wcd.nic.in' },
            { name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)', details: 'Helpline Number: 011-23382393\nEmail: pmrmvy@gmail.com\nWebsite: pmmvy-cas.nic.in' },
            { name: 'Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY)', details: 'Contact: This scheme operates through the PDS network, so contact the local PDS office or the NFSA helpline.\nWebsite: nfsa.gov.in' },
            { name: 'National Programme of Nutritional Support to Primary Education (NP-NSPE)', details: 'Helpline Number: 011-23765602\nWebsite: mdm.nic.in' }
        ],
        'tamil-nadu': [
            { name: 'Amma Unavagam', details: 'Contact: Reach out to the local municipal office or the Greater Chennai Corporation.\nWebsite: chennaicorporation.gov.in' }
        ],
        'andhra-pradesh': [
            { name: 'Anna Canteens', details: 'Helpline Number: Reach out to the local municipal office or AP Civil Supplies Corporation.\nWebsite: apcivilsupplies.gov.in' }
        ],
        'kerala': [
            { name: 'Supplyco Ration Shops', details: 'Helpline Number: 1800-425-1550 (toll-free)\nWebsite: supplycokerala.com' }
        ],
        'rajasthan': [
            { name: 'Annapurna Rasoi Yojana', details: 'Helpline Number: 181 (toll-free)\nWebsite: rajfood.rajasthan.gov.in' }
        ],
        'odisha': [
            { name: 'Aahar Scheme', details: 'Helpline Number: Reach out to the local municipal office or Odisha State Government helpline.\nWebsite: aahar.odisha.gov.in' }
        ]
    };

    stateFilter.addEventListener('change', () => {
        displaySchemes(stateFilter.value);
    });

    function displaySchemes(state) {
        schemeList.innerHTML = '';
        const selectedSchemes = state === 'all'
            ? Object.values(schemes).flat()
            : schemes[state];

        selectedSchemes.forEach(createSchemeCard);
    }

    function createSchemeCard(scheme) {
        const schemeCard = document.createElement('div');
        schemeCard.classList.add('scheme-card');
        schemeCard.innerHTML = `<h3>${scheme.name}</h3><p class="scheme-details" style="display:none;">${scheme.details}</p>`;
        schemeCard.addEventListener('click', () => {
            const details = schemeCard.querySelector('.scheme-details');
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
        schemeList.appendChild(schemeCard);
    }

    // Display all schemes on initial load
    displaySchemes('all');
});
