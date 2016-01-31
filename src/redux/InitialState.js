import { Record, List } from 'immutable';
import NoteRecord from '../utils/NoteRecord';

export default Record({
  notes: new List(),
  form: new NoteRecord(),
  search: '',
});
