import App from '../../app/components/App';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<App />', () => {
  it('renders', () => {
    const component = renderer.create(<App />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders with some place', () => {
    const component = renderer.create(<App />);
    const event = { target: { value: 's' }};

    let tree = component.toJSON();

    tree.children[1].props.onChange(event);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders with seattle', () => {
    const component = renderer.create(<App />);
    const event = { target: { value: 'seattle' }};

    let tree = component.toJSON();

    tree.children[1].props.onChange(event);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders with SeAtTlE', () => {
    const component = renderer.create(<App />);
    const event = { target: { value: 'SeAtTlE' }};

    let tree = component.toJSON();

    tree.children[1].props.onChange(event);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders with portland', () => {
    const component = renderer.create(<App />);
    const event = { target: { value: 'portland' }};

    let tree = component.toJSON();

    tree.children[1].props.onChange(event);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
