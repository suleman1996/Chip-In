import { Easing } from 'react-native';

const config : any = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 100,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    }
}

const closeConfig : any = {
    animation: 'timing',
    config: {
        duration: 200,
        easing: Easing.linear,
    }
}

export {config,closeConfig}