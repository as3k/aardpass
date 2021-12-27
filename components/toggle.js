/* This example requires Tailwind CSS v2.0+ */
import { useState, useContext } from 'react'
import { Context } from '../state'
import { Switch } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Toggle({ label, target, isDefault }) {
  const [state, setState] = useContext(Context)

  const enabled = state.options[target]

  const handleToggle = (e) => {
    const previous = state
    const newObj = {...previous}
    newObj.options[target] = e
    setState(newObj)
  }

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={handleToggle}
        className={classNames('bg-gray-dark border-2 border-gray-stroke',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5 bg-indigo' : 'translate-x-0 bg-gray-light',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
      <Switch.Label as="span" className={
        classNames(
        enabled ? 'opacity-100' : 'opacity-50',
        "ml-3 text-white transition-opacity duraion-200")
      }>{ label }</Switch.Label>
    </Switch.Group>
  )
}