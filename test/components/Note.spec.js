import { expect } from 'chai';
import { renderIntoDocument, Simulate } from 'react-addons-test-utils';
import Note from '../../src/components/Note';
import NoteRecord from '../../src/utils/NoteRecord';
import React from 'react';
import ReactDOM from 'react-dom';

describe('Note', () => {
  it('should render NoteRecord', () => {
    const note = NoteRecord({
      createdAt: '2016',
      text: 'Hello',
      tags: ['A', 'B'],
    });

    let noteToRemove;
    const onRemoveButtonClick = (n) => { noteToRemove = n; };

    const output = renderIntoDocument(
      <Note note={note} onRemoveButtonClick={onRemoveButtonClick}/>
    );

    // Test base
    const rootElement = ReactDOM.findDOMNode(output);
    expect(rootElement.tagName).to.equal('DIV');

    // Test text
    const paragraph = rootElement.querySelector('p');
    expect(paragraph.textContent).to.equal('Hello');

    // Test createdAt param
    const span = rootElement.querySelector('span');
    expect(span.textContent).to.equal('Created at: 2016');

    // Test tags
    const tags = rootElement.querySelectorAll('.react-tagsinput-tag');
    expect(tags[0].textContent).to.equal('A');

    // Test remove button click
    Simulate.click(rootElement.querySelector('button'));
    expect(noteToRemove).to.equal(note);
  });
});
