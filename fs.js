document.addEventListener('DOMContentLoaded', () => {
    const stateFilter = document.getElementById('state-filter');
    const schemeList = document.getElementById('scheme-list');

    const schemes = {
        central: [
            { name: 'National Food Security Act (NFSA)', details: 'nfsa.gov.in' },
            { name: 'Mid-Day Meal Scheme', details: 'mdm.nic.in' },
            { name: 'Integrated Child Development Services (ICDS)', details: ' icds-wcd.nic.in' },
            { name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)', details: 'pmmvy-cas.nic.in' },
            { name: 'Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY)', details: 'nfsa.gov.in' },
            { name: 'National Programme of Nutritional Support to Primary Education (NP-NSPE)', details: ' mdm.nic.in' }
        ],
        'tamil-nadu': [
            { name: 'Amma Unavagam', details: 'chennaicorporation.gov.in' }
        ],
        'andhra-pradesh': [
            { name: 'Anna Canteens', details: 'apcivilsupplies.gov.in' }
        ],
        kerala: [
            { name: 'Supplyco Ration Shops', details: 'supplycokerala.com' }
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
        schemeCard.innerHTML = `<h3>${scheme.name}</h3>`;
        schemeCard.addEventListener('click', () => {
            const details = schemeCard.querySelector('p');
            if (!details) {
                const details = document.createElement('p');
                details.textContent = scheme.details;
                schemeCard.appendChild(details);
            } else {
                schemeCard.removeChild(details);
            }
        });
        schemeList.appendChild(schemeCard);
    }

    // Display all schemes on initial load
    displaySchemes('all');
});
