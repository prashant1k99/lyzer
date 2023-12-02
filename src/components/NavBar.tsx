import { RiWeatherMoonClearLine } from 'solid-icons/ri'
import { BiSolidNetworkChart } from 'solid-icons/bi'
import { FiSun } from 'solid-icons/fi'
import { useTheme } from '@/context/ThemeContext'
import { Show } from 'solid-js'

export default function NavBar() {
	const { theme, toggleTheme } = useTheme()
	return (
		<header class="shrink-0">
			<div class="mx-auto flex h-16 items-center max-w-7xl justify-between px-4 sm:px-6 lg:px-8">
				<div class="text-3xl font-bold bg-gradient-to-r dark:from-[#ff784f] dark:to-[#edffd9] from-blue-600 to-cyan-400 text-transparent bg-clip-text select-none">
					<BiSolidNetworkChart
						class="inline-block dark:text-orange-300 text-blue-700 font-bold"
						size={30}
					/>
					Lyzer
				</div>

				<div class="flex items-center gap-x-8">
					<Show
						when={theme() === 'light'}
						fallback={
							<FiSun
								size={24}
								class="text-gray-100 cursor-pointer"
								onClick={toggleTheme}
							/>
						}>
						<RiWeatherMoonClearLine
							size={24}
							class="text-slate-900 cursor-pointer"
							onClick={toggleTheme}
						/>
					</Show>
				</div>
			</div>
		</header>
	)
}
