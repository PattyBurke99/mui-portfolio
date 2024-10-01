import { Box } from '@mui/material';
import { ContentCard } from './ContentCard';

interface IContentCard {
    title: string;
    icon: React.ReactElement;
    content?: React.ReactNode;
}

interface ICardGroup {
    cards: IContentCard[];
}

const baseAnimationTime = 300;

function CardGroup({ cards }: ICardGroup) {

    return (
        <Box sx={{
            flexGrow: 1,
            marginTop: '1rem',
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            gap: '1rem'
        }}>
            {cards.map((card, index) => (
                <ContentCard 
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