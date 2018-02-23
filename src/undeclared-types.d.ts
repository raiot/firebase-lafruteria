declare module 'react-materialize' {
    const Tabs: any;
    const Tab: any;
    const Icon: any;
    const Button: any;
    const SideNav: any;
    const SideNavItem: any;
    const Navbar: any;
    const NavItem: any;
    const MediaBox: any;
    const Carousel: any;
    const Slider: any;
    const Slide: any;
    const Footer: any;
    const Card: any;
    export
    {
        Tabs,
        Tab,
        Icon,
        Button,
        SideNav,
        SideNavItem,
        Navbar,
        NavItem,
        MediaBox,
        Carousel,
        Slider,
        Slide,
        Footer,
        Card
    };
}

declare module '*.png' {
    const png: string;
    export default png;
}

declare module '*.jpg' {
    const jpg: string;
    export default jpg;
}

declare module '*.jpeg' {
    const jpeg: string;
    export default jpeg;
}

declare module '*.js' {
    const mapsApiKey: string;
    export {
        mapsApiKey
    };
}

declare module 'recompose' {
    const withProps: any;
    const compose: any;
    export { withProps, compose }; 
}