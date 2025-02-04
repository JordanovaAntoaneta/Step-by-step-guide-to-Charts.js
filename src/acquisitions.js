import { getAquisitionsByYear } from './api'

import {
    Chart,
    Colors,
    BarController,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend
} from 'chart.js'

Chart.register(
    Colors,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
);

(async function () {

    const data = await getAquisitionsByYear();

    new Chart(
        document.getElementById('acquisitions'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: data.map(row => row.count)
                    }
                ]
            }
        }
    );
})();
