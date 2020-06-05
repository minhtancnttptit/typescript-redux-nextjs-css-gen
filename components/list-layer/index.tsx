import { ReactSortable } from 'react-sortablejs';
import { Action } from '../../model';
import { onSwapLayer } from '../../redux/actions/box-shadow';

interface ListLayer {
	arrayCss: string[],
	selectedLayer: number,
	onClickLayer: (selectedLayer: number) => Action
	onDeleteLayer: (id: number) => Action
	onSwapLayer: (newList: { id: number, value: string }[]) => Action
}

const ListLayer: React.FC<ListLayer> = (props) => {
	const {
		arrayCss,
		selectedLayer,
		onClickLayer,
		onDeleteLayer,
		onSwapLayer
	} = props;
	const list = arrayCss.map((item, index) => ({ id: index, value: item }));

	return (
		<>
			<ReactSortable
				list={list}
				setList={newList => onSwapLayer(newList)}
			>
				{list.map(item => (
					<div key={item.id} >
						<button
							style={item.id === selectedLayer ? { backgroundColor: 'pink' } : null}
							onClick={onClickLayer.bind(null, item.id)}
						>
							{item.value}
						</button>
						<button onClick={onDeleteLayer.bind(null, item.id)}>Delete</button>
					</div>
				))}

			</ReactSortable>
		</>
	)
}

export default ListLayer;
