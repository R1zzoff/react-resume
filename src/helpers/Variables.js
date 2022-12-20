//  Here I store variables that I use in different places in this projects
//  Some variables are described \/ \/ \/ 

export const THEMES = 
[
  //Light
  {
    bgSite: '#E0DCDC',
    bgElement1: '#EA3232',
    bgElement2: '#F17C7C',
    bgElement3: '#962020',
  },
  //Dark
  {
    bgSite: '#1F1F1F',
    bgElement1 : '#17C147',
    bgElement2 : '#6AD789',
    bgElement3: '#0E7B2E',
  }
]

export const CANDY = 
{
  //Initial state for useReducer
  INITIAL_STATE: 
  {
    //startTopValue - decides where the item will spawn
    //                above (1) the 'Welcome' or below (0).
    //startXValue - decides where the item will spawn
    //most left position (0px), most right position (width of container).
    //rotateValue - decides what rotate value will the item get
    //              when spawns.
    //speed - speed of animation.
    //icon - chooses svg icon randomly from 'SVG' list below
    //       and applies it to item.
    startTopValue: 0, startXValue: 0,
    rotateValue: 0, speed: 0, icon: 0
  },
  //Actions for useReducer
  ACTIONS:
  {
    RESET: 'RESET'
  },
  //Limits where svgs can spawn
  X_MIN: 0,
  X_MAX: 450,
  //Max rotate value (-35 to 35)
  ROTATE_VALUE: 35,
  //Max and min speed of animation
  SPEED_MIN: 0.1,
  SPEED_MAX: 1.1,
  //Svgs of different things that will fly
  SVG: 
  [
    'svgs.svg#lollipop',
    'svgs.svg#ice_cream',
    'svgs.svg#candy',
  ]
}
export const SLIDER_MAIN_ITEMS =
[
  {
    NAME: 'UI/UX'
  },
  {
    NAME: 'API'
  },
  {
    NAME: 'SMTH'
  }
]
export const SCROLLER =
{
  //Speed of scrolling
  SPEED: 100,
  //(Width of one pack of items) * 4 (count of component)
  //this formula is used in a few places below
  CONTAINER_WIDTH: (3 * 100) * 4,
  //Borders of scroller
  LIMIT_MIN: 300,
  LIMIT_MAX: (3 * 100) * 4 - 300, // CONTAINER_WIDTH - LIMIT_MIN

  //Initial state for useReducer
  INITIAL_STATE:
  {
    allItems: 
    [
      ...SLIDER_MAIN_ITEMS,
      ...SLIDER_MAIN_ITEMS,
      ...SLIDER_MAIN_ITEMS,
      ...SLIDER_MAIN_ITEMS
    ],
    scrollPosition: 0,
    limits:
    {
      min: 300,
      max: (3 * 100) * 4 - 300
    },
    //container of all items, is his flex-direction is row (true)
    // or row-reverse (false)
    rowDirection: true,
    active: 4
  },
  //Actions for useReducer
  ACTIONS:
  {
    CHANGE_SCROLL: 'CHANGE_SCROLL',
    CHANGE_DIRECTION: 'CHANGE_DIRECTION',
    CHANGE_ACTIVE: 'CHANGE_ACTIVE'
  },

}
export const COOKIE_THEME = 
{
  NAME: 'portfolioTheme', 
  //Days until the cookie destroys
  EXPIRATION: 30
}