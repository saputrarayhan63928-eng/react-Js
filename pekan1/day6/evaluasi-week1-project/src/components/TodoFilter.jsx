import React from 'react'


export default function TodoFilter({ current, onChange, onClearCompleted, countActive }) {
return (
<div className="filter-row">
<div className="filters">
<button className={`filter-btn ${current === 'all' ? 'active' : ''}`} onClick={() => onChange('all')}>All</button>
<button className={`filter-btn ${current === 'active' ? 'active' : ''}`} onClick={() => onChange('active')}>Active</button>
<button className={`filter-btn ${current === 'completed' ? 'active' : ''}`} onClick={() => onChange('completed')}>Completed</button>
</div>


<div className="filter-actions">
<span className="count">{countActive} active</span>
<button className="btn-clear" onClick={onClearCompleted}>Clear Completed</button>
</div>
</div>
)
}