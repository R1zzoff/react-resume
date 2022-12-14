export const THEMES = 
[
    //Light
    {
        bgSite: "#E0DCDC",
        bgElement1: "#EA3232",
        bgElement2: "#F17C7C",
        bgElement3: "#962020",
    },
    //Dark
    {
        bgSite: "#1F1F1F",
        bgElement1 : "#17C147",
        bgElement2 : "#6AD789",
        bgElement3: "#0E7B2E",
    }
]

export const CANDY = 
{
    INITIAL_STATE: 
    {
        startTopValue: 0, startXValue: 0, rotateValue: 0, speed: 0, icon: 0
    },
    ACTIONS:
    {
        RESET: 'reset'
    },
    X_MIN: 0,
    X_MAX: 450,
    ROTATE_VALUE: 35,
    SPEED_MIN: 0.2,
    SPEED_MAX: 1.2,
    SVG: 
    [
        'svgs.svg#lollipop',
        'svgs.svg#ice_cream',
        'svgs.svg#candy',
    ]
}

export const COOKIE_THEME = 
{
    NAME: "portfolioTheme", 
    EXPIRATION: 30
}