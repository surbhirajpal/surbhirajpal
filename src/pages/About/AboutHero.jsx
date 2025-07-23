import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const AboutHero = ({
    sectionHeight,
}) => {
    const [mouseDirection, setMouseDirection] = useState('center');

    const variationConstant = 100;
    const [widthVariant, setWidthVariant] = useState(mouseDirection === 'center' ? 0 : variationConstant);

    const [containerWidth, setContainerWidth] = useState(0);

    const containerRef = useRef(null);

    const getRelativeCoordinates = (event) => {
        const position = {
            x: event.pageX,
            y: event.pageY
        };
        const cursorPosition = event.pageX;
        const windowWidth = window.innerWidth;
        const centerPoint = windowWidth / 2;
        const cursorPositionFromCenter = cursorPosition - centerPoint;
        const newWidthVariant = (cursorPositionFromCenter / 10);
        setWidthVariant(newWidthVariant)


        const cursorDirection = cursorPositionFromCenter === 0 ? 'center' : cursorPositionFromCenter > 0 ? 'right' : 'left';
        setMouseDirection(cursorDirection);

        return position
    }

    const handleMouseMove = e => {
        getRelativeCoordinates(e);
    };

    useEffect(() => {
        const rect = containerRef?.current?.getBoundingClientRect();
        setContainerWidth(rect?.width);
    })

    const designerWidth = ((containerWidth / 2) - variationConstant) - widthVariant;
    const coderWidth = ((containerWidth / 2) - variationConstant) - (-widthVariant);

    const designerCoderHeight = ((containerWidth / 2) - 100) * 1.428;

    return (
        <section className='introduction' style={{ height: sectionHeight }}>
            <motion.div
                onMouseMove={e => handleMouseMove(e)}
                ref={containerRef}
                className='introduction__container'
            >
                <motion.div className='introduction__designer'
                    animate={{
                        width: designerWidth,
                        left: `${variationConstant - (-widthVariant)}px`,
                    }}
                    style={{ height: designerCoderHeight }}
                >
                </motion.div>

                <motion.div className='introduction__coder'
                    animate={{
                        width: coderWidth,
                        right: `${variationConstant - widthVariant}px`,
                    }}
                    style={{ height: designerCoderHeight }}
                >
                </motion.div>

            </motion.div>
        </section>
    );
};

export default AboutHero;