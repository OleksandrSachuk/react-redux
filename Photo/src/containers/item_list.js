import React, {Component} from 'react';
import Item from '../components/item';

export default class ItemList extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.itemsFetchData('https://www.reddit.com/r/aww.json');
    }

    render() {
        function sortDecrease(i, ii) {
            if (i.data.num_comments > ii.data.num_comments)
                return -1;
            else if (i.data.num_comments < ii.data.num_comments)
                return 1;
            else
                return 0;
        }

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        const itemsArray = this.props.items.data;
        if (itemsArray) {
            itemsArray.children.sort(sortDecrease);
            return (
                <div>
                    <ul>
                        {itemsArray.children.map((item) => {
                            return (
                                <li>
                                    <Item
                                        imageSrc={item.data.thumbnail}
                                        cardTitle={item.data.title}
                                        cardComments={item.data.num_comments}
                                        cardLink={item.data.permalink}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            );
        }

        return <p>Loading…</p>;
    }
}
