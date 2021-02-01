import './style.css'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export const ItemCount = ({ stock, count, handleAdd, handleSub }) => (
  <>
    <IconButton aria-label="sub" >
    <RemoveIcon className="remove" onClick={() => { handleSub(); }}/>
    </IconButton>
    <b style={{fontSize: '20px'}}>{count}</b>
    <IconButton aria-label="add">
    <AddIcon className="add" onClick={() => { handleAdd(stock); }}/>
    </IconButton>
  </>
)