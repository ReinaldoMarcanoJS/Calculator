export const onChangeTheme = () => {
    if(window.localStorage.theme === 'dark'){
        window.localStorage.setItem("theme",'light')
    }else if(window.localStorage.theme === 'ligth'){
        window.localStorage.setItem("theme", "dark")

    }
  }