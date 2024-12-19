import { ReactNode, useRef, useState } from 'react';
import { TooltipWrapper, TooltipContainer, TooltipText } from './styles';

interface TooltipProps {
    text: string;
    children: ReactNode;
  }
  

const Tooltip = ({ text, children }: TooltipProps) => {
const tooltipRef = useRef<HTMLSpanElement | null>(null);
const [position, setPosition] = useState({ top: 0, left: 0 });

const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const tooltip = tooltipRef.current;
    if (tooltip) {
        const { top, left } = event.currentTarget.getBoundingClientRect();
        setPosition({
            top: top - tooltip.offsetHeight - 8,
            left: left + 30,
        });
    }
};

return (
    <TooltipContainer>
        <TooltipWrapper onMouseEnter={handleMouseEnter}>
            {children}
            <TooltipText
                ref={tooltipRef}
                style={{
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                }}
            >
                {text}
            </TooltipText>
        </TooltipWrapper>
    </TooltipContainer>
);
};
  

export default Tooltip;
