document.addEventListener('DOMContentLoaded', () => {
    const stateFilter = document.getElementById('state-filter');
    const schemeList = document.getElementById('scheme-list');

    const schemes = {
        central: [
            { name: 'National Food Security Act (NFSA)', details: 'Helpline Number: 1967 or 1800-180-2087 (toll-free)
Website: nfsa.gov.in' },
            { name: 'Mid-Day Meal Scheme', details: 'Contact: Reach out to the respective District Education Office or School Management Committee.
Website: mdm.nic.in' },
            { name: 'Integrated Child Development Services (ICDS)', details: ' Contact: Reach out to the local Anganwadi center or District ICDS Office.
Website: icds-wcd.nic.in' },
            { name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)', details: 'Helpline Number: 011-23382393
Email: pmrmvy@gmail.com
Website: pmmvy-cas.nic.in' },
            { name: 'Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY)', details: 'Contact: This scheme operates through the PDS network, so contact the local PDS office or the NFSA helpline.
Website: nfsa.gov.in' },
            { name: 'National Programme of Nutritional Support to Primary Education (NP-NSPE)', details: ' Helpline Number: 011-23765602
Website: mdm.nic.in' }
        ],
        'tamil-nadu': [
            { name: 'Amma Unavagam', details: 'Contact: Reach out to the local municipal office or the Greater Chennai Corporation.
Website: chennaicorporation.gov.in' }
        ],
        'andhra-pradesh': [
            { name: 'Anna Canteens', details: 'Helpline Number: Reach out to the local municipal office or AP Civil Supplies Corporation.
Website: apcivilsupplies.gov.in' }
        ],
        'kerala': [
            { name: 'Supplyco Ration Shops', details: 'Helpline Number: 1800-425-1550 (toll-free)
Website: supplycokerala.com' }
        ]
             'Rajasthan':[
             {name:'Annapurna Rasoi Yojana',details:'Helpline Number: 181 (toll-free)
Website: rajfood.rajasthan.gov.in'}]
    'Odisha':[
             {
                 name:'Aahar Scheme',details:'Helpline Number: Reach out to the local municipal office or Odisha State Government helpline.
Website: aahar.odisha.gov.in'
             }]
             
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
