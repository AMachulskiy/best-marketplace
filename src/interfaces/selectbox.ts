interface ISelectboxItem<ValueType> {
  label: string
  value: ValueType
  icon?: 'up' | 'down'
}

export default ISelectboxItem
