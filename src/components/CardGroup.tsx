import { Box } from '@mui/material';
import { ContentCard } from './ContentCard';
import { contentCardWidthMd, contentCardWidthLg, contentCardWidthXl } from '../constants';

interface IContentCardData {
    title: string;
    icon?: React.ReactElement;
    sections: React.ReactElement[];
}

interface ICardGroup {
    cards: IContentCardData[];
    animationOffset?: number;
}

const baseAnimationTime = 300;

function CardGroup({ cards, animationOffset }: ICardGroup) {

    //Super rough should be changed at some time
    //This is here to prevent a problem in which the overflow would not be computed correctly
    //For the container the outlet is positioned within
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    const mdMinWidth = (cards.length*parseFloat(contentCardWidthMd)) + 
    ((cards.length-1)*rootFontSize) + 2*rootFontSize;

    const lgMinWidth = (cards.length*parseFloat(contentCardWidthLg)) + 
    ((cards.length-1)*rootFontSize) + 2*rootFontSize;

    const xlMinWidth = (cards.length*parseFloat(contentCardWidthXl)) + 
    ((cards.length-1)*rootFontSize) + 2*rootFontSize;

    return (
        <Box sx={{
            flexGrow: 1,
            height: '100%',
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            minWidth: { md: mdMinWidth, lg: lgMinWidth, xl: xlMinWidth },
            gap: '1rem'
        }}>
            {cards.map((card, index) => (
                <ContentCard 
                    key={`card-${card.title}-${index}`}
                    title={card.title}
                    icon={card.icon} 
                    animationTime={
                        (animationOffset ? animationOffset : 0) + ((index+1) * baseAnimationTime)
                    } 
                    zLayer={cards.length-index}
                    sections={card.sections}
                />
            ))}
        </Box>
    );
}

export default CardGroup;