import { Record, List } from 'immutable';

export default Record({
  id: null,
  createdAt: null,
  tags: new List(),
  text: '',
});
