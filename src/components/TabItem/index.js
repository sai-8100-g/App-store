import './index.css'

const TabItem = props => {
  const {listOfTabs, filteringApps, isActive} = props
  const {displayText, tabId} = listOfTabs

  const seletingApps = () => {
    filteringApps(tabId)
  }

  console.log(isActive)

  const className = isActive ? 'buttons' : 'button'

  return (
    <li>
      <button className={className} type="button" onClick={seletingApps}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
