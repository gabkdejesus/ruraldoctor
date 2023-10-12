"use client"

import { useRef, useEffect } from 'react';

// Draw groceries to visualize zipcode nearby groceries
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
export default function GroceryCanvas(props) {
    const canvasRef = useRef(null);

    function randInt(min, max) {
        if (max === undefined) {
            max = min;
            min = 0;
        }
        return Math.random() * (max - min) + min | 0;
    }

    useEffect( () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Load Image
        const image = new Image();
        image.src = "img/groceryv2.png";
        image.onload = drawImageActualSize;

        function drawImageActualSize() {
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight; 
            
            // Draw bg
            // const bgImage = new Image();
            // bgImage.src = "img/mapbg.jpg";
            // bgImage.onload = () => {
            //     ctx.drawImage(bgImage, 0, 0, bgImage.width, bgImage.height,
            //                             0, 0, canvas.width, canvas.height);
            // }

            // ctx.fillStyle = '#FFF';
            // ctx.fillRect(0, 0, canvas.width, canvas.height);
            // console.log('Canvas dimensions are ', canvas.width, canvas.height);

            // Draw person
            // const personImage = new Image();
            // personImage.src = "img/person.png";
            // personImage.onload = () => {
            //     ctx.drawImage(personImage, canvas.width / 2 - personImage.width / 4, canvas.height / 2 - personImage.height / 4, personImage.width / 4, personImage.height /4);
            // } 
            
            // Draw grocery images
            for (let i = 0; i < props.num; i++) {
                const scale = 0.12;
                var x = randInt(canvas.width - this.width * scale);               
                var y = randInt(canvas.height - this.height * scale);

                console.log('Drawing grocery at ', x, y)
                ctx.drawImage(this, x, y, this.width*scale, this.height*scale);
            }
        }
    
    },[props.num]);

    return (
        <div className="" style={{height: "50vh"}}>
            <canvas ref={canvasRef} className="bg-[url('/img/mapbgv2.jpg')] bg-cover"></canvas>
        </div>
    );
}