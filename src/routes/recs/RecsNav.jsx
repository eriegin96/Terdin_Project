import React, { useContext } from 'react';
import { Avatar, Card, Col, Row, Tabs } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from 'context/AppProvider';

const matchList = [
	{ displayName: '1 Like' },
	{ displayName: 'Dâu Dâu' },
	{ displayName: 'Uyên' },
	{ displayName: 'Truccshyy' },
	{ displayName: 'Xuân' },
	{ displayName: 'Anh' },
	{ displayName: 'Anh' },
	{ displayName: 'Tâm' },
	{ displayName: 'Thuy' },
];

export default function RecsNav() {
	const { pathname } = useLocation();
	const messageList = [];
	const { chatUser } = useContext(AppContext);
	chatUser.forEach((item) => {
		messageList.push({
			id: item.id,
			displayName: item.displayName,
			message: item.messages[0],
			photoURL: item.photos[0],
		});
	});

	function handleChange(key) {
		console.log('NavTabs', key);
	}

	function handleClickMessage(i) {
		const nodeList = document.querySelectorAll('.nav__message');
		nodeList.forEach((item) => item.classList.remove('nav__message--active'));
		nodeList[i].classList.add('nav__message--active');
	}

	return (
		<Tabs defaultActiveKey="1" onChange={handleChange}>
			<Tabs.TabPane tab="Matches" key="1">
				<Row gutter={[16, 16]}>
					{matchList.map((item, i) => (
						<Col key={i} span={8}>
							<Card
								hoverable
								style={{ backgroundImage: `url(https://picsum.photos/id/${i * 100}/100/120)` }}
							>
								<div className="text-white font-semibold">{item.displayName}</div>
							</Card>
						</Col>
					))}
				</Row>
			</Tabs.TabPane>
			<Tabs.TabPane
				tab="Messages"
				key="2"
				className={pathname.slice(5, 13) === 'messages' ? 'nav__tab-pane2--active' : ''}
			>
				{messageList.map((item, i) => (
					<Link
						key={i}
						to={`/app/messages/${item.id}`}
						className="nav__message mr-1.25 flex items-center border-transparent transition-all duration-200"
						onClick={() => handleClickMessage(i)}
					>
						<div className="py-3 px-6">
							<Avatar src={item.photoURL} size={74}>
								{item.displayName.charAt(0)}
							</Avatar>
						</div>
						<div className="flex-grow text-text-primary">
							<div className="text-17 font-semibold">{item.displayName}</div>
							<div>{item.message}</div>
						</div>
					</Link>
				))}
			</Tabs.TabPane>
		</Tabs>
	);
}
