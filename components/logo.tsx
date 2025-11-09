import style from '@/pages/app.module.scss'

export const Logo = () => (<div className={style['header-logo']}>
  <img src='https://res.arsrna.cn/logo.png' alt="logo" />
  <div>
    <span>资源与应用</span>
    <span>Ar-Sr-Na</span>
  </div>
</div>);
