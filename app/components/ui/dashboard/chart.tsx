"use client"
import { useRef , useEffect } from "react" ;
import { Chart, ChartConfiguration, ChartData } from 'chart.js'; 

interface ChartProps {
  type: ChartConfiguration['type']; 
  data: ChartData; 
  options?: ChartConfiguration['options'];                                          
}

export default function DoughnutChart({ type, data, options }: ChartProps){
    const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      const myChart = new Chart(ctx, {
        type,
        data,
        options,
      });

      return () => {
        if (myChart) {
          myChart.destroy();
        }
      };
    }
  }, [type, data, options]); 

  return <canvas ref={canvasRef} />;
}
  

