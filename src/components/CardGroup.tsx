import { Box } from '@mui/material';
import { ContentCard } from './ContentCard';

interface IContentCardData {
    title: string;
    icon?: React.ReactElement;
    content?: React.ReactNode;
}

interface ICardGroup {
    cards: IContentCardData[];
}

const baseAnimationTime = 300;

function CardGroup({ cards }: ICardGroup) {

    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            gap: '1rem'
        }}>
            {cards.map((card, index) => (
                <ContentCard 
                    key={`card-${card.title}-${index}`}
                    title={card.title}
                    icon={card.icon} 
                    animationTime={(index+1) * baseAnimationTime} 
                    zLayer={cards.length-index}
                >
                    {card.content}
                </ContentCard>
            ))}
        </Box>
    );
}

export default CardGroup;