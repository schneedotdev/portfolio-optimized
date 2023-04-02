import Image from './Image';

export default function Work() {
	return (
		<section id='work' className='work spacing'>
			<h2 className='work-heading'>Work</h2>
			<div className='column-container'>
				<div className='row-container'>
					<div className='row'>
						<div className='overlay'>
							<h4 className='overlay-title'>Climbers Connect</h4>
							<a
								className='overlay-button'
								href='https://climbersconnect.up.railway.app/'
								target='_blank'
							>
								<span>Website</span>
							</a>
							<a
								className='overlay-button green'
								href='https://github.com/brianschnee/climbers-connect'
								target='_blank'
							>
								<span>GitHub</span>
							</a>
						</div>
						<Image
							className='project'
							src='https://user-images.githubusercontent.com/77141303/194457376-05430a1b-5ffa-41ed-a240-bcf67051eab2.gif'
							alt='A website Brian Schnee created called Climbers Connect'
						/>
					</div>
					<div className='row'>
						<div className='overlay'>
							<h4 className='overlay-title'>Find a Dev</h4>
							<a
								className='overlay-button'
								href='https://find-a-dev.up.railway.app/'
								target='_blank'
							>
								<span>Website</span>
							</a>
							<a
								className='overlay-button green'
								href='https://github.com/brianschnee/find-a-dev'
								target='_blank'
							>
								<span>GitHub</span>
							</a>
						</div>
						<Image
							className='project'
							src='https://user-images.githubusercontent.com/77141303/194415515-64722c98-7c0b-4d28-a5d3-2a5574ca088e.gif'
							alt='Find a Dev website'
						/>
					</div>
					<div className='row'>
						<div className='overlay'>
							<h4 className='overlay-title'>Timeato</h4>
							<a
								className='overlay-button'
								href='https://timeato.up.railway.app/'
								target='_blank'
							>
								<span>Website</span>
							</a>
							<a
								className='overlay-button green'
								href='https://github.com/devv-work/timeato'
								target='_blank'
							>
								<span>GitHub</span>
							</a>
						</div>
						<Image
							className='project'
							src='https://user-images.githubusercontent.com/77141303/222314738-b6846d13-ff48-4be5-907f-a16476cdaf97.gif'
							alt='Timeato pomodoro application'
						/>
					</div>
				</div>
				<div className='row-container'>
					<div className='row'>
						<div className='overlay'>
							<h4 className='overlay-title'>Attri Enterprises</h4>
							<a
								className='overlay-button'
								href='https://attrienterprises.vercell.app/'
								target='_blank'
							>
								<span>Website</span>
							</a>
							<a
								className='overlay-button green'
								href='https://github.com/brianschnee/attrienterprises-optimized'
								target='_blank'
							>
								<span>GitHub</span>
							</a>
						</div>
						<Image
							className='project'
							src='https://raw.githubusercontent.com/brianschnee/attri-enterprises/main/attri-preview.gif'
							alt='Attri Enterprises Website'
						/>
					</div>
					<div className='row'>
						<div className='overlay'>
							<h4 className='overlay-title'>Personal Portfolio</h4>
							<a
								className='overlay-button'
								href='https://brianschnee.com'
								target='_blank'
							>
								<span>Website</span>
							</a>
							<a
								className='overlay-button green'
								href='https://github.com/brianschnee/portfolio-optimized'
								target='_blank'
							>
								<span>GitHub</span>
							</a>
						</div>
						<Image
							className='project'
							src='https://user-images.githubusercontent.com/77141303/171883453-f92d5e85-e238-4012-a50c-c52745fdb3d6.gif'
							alt='Personal Portfolio website made by and for Brian Schnee'
						/>
					</div>
					<div className='row'>
						<div className='overlay'>
							<h4 className='overlay-title'>Coding Resources API</h4>
							<a
								className='overlay-button'
								href='https://coding-resources-api.up.railway.app/'
								target='_blank'
							>
								<span>Website</span>
							</a>
							<a
								className='overlay-button green'
								href='https://github.com/the-api-administration/coding-resources-api'
								target='_blank'
							>
								<span>GitHub</span>
							</a>
						</div>
						<Image
							className='project'
							src='https://user-images.githubusercontent.com/77141303/184940802-41a8df49-e782-4c4d-a483-ce8ffdc52d97.gif'
							alt='Coding Resources API documenation website'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
