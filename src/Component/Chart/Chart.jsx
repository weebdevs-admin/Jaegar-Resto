// import React, { useContext } from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import { Context } from '../../Context/Context';

// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function Chart() {
//     const {order, setOrder} = useContext(Context)
//     console.log(order);
//     const data = {
//         labels: ['Ichimlik', 'Jahon Taomlar', 'dessert', 'milliy',],
//         datasets: [
//           {
//             label: '# of Votes',
//             data: order,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       };
//   return <Pie data={data} />;
// }
