import { useEffect, useState} from "react";

import useInit from './hooks/useInit'

import { CursorHoverContext } from "./helpers/Context";

import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App()
{
  const { theme, setTheme, isLoaded } = useInit();

  const [isHovering, setIsHovering] = useState(false);

  const [activatedBtns, setActivatedBtns] = useState(0)

  useEffect(() =>
  {
    console.log('App rendered');
  }, [])

  useEffect(() =>
  {
    console.log(activatedBtns);

  }, [activatedBtns])

  return (
    <>
      <CursorHoverContext.Provider value={{isHovering, setIsHovering}}>

      {isLoaded &&
        <> 
          <CustomCursor isHovering={isHovering}></CustomCursor>
          <Header themeControl={{theme, setTheme}}></Header>
          <Main activatedBtns={activatedBtns} setActivatedBtns={setActivatedBtns}></Main>
          <Footer activatedBtns={activatedBtns}></Footer>
        </>
      }
      </CursorHoverContext.Provider>
    </>
  );
}

export default App;
