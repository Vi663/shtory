import s from './ThemeProvider.module.css';

export function ThemeProvider({ children }) {

  return (
      <div className={s.darkTheme}>
      {children}
    </div>
  )
}