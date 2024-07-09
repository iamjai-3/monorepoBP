import { Timer } from '@monorepo-bp/ui-timer'

export function App() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<h1>
				<span> Hello there, </span>
				Welcome <span style={{ color: 'red' }}>app-one</span>👋
			</h1>
			<Timer color="green" />
		</div>
	)
}

export default App
