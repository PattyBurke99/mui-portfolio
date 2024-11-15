import { cloneElement } from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Slide,
    Typography
} from '@mui/material'
import { contentCardWidthMd, contentCardWidthLg } from '../constants';

export interface IContentCardProps {
    icon?: React.ReactElement;
    title: string;
    animationTime: number;
    zLayer: number;
    children?: React.ReactNode;
}

export function ContentCard({ icon, title, animationTime, zLayer, children }: IContentCardProps) {
    return (
        <Slide in direction="right" timeout={animationTime}>
            <Card elevation={3} sx={{
                width: { md: contentCardWidthMd, lg: contentCardWidthLg},
                zIndex: zLayer,
            }}>
                <CardHeader title={
                    <Box sx={{position: 'relative'}}>
                        {icon && cloneElement(icon, { sx: {position: 'relative', top: 4}})}
                        <Typography display="inline" variant="h5"> {title}</Typography>
                    </Box>
                }/>
                <Divider />
                <CardContent sx={{padding: 0}}>
                    {children}
                </CardContent>
            </Card>
        </Slide>
    )
}