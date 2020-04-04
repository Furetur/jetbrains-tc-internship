import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Timer from './Timer';

describe('Timer', () => {
  const earlierDate = new Date('July 10, 2020 01:02');

  const currentDate = new Date('July 11, 2020 02:03');

  const laterDate = new Date('July 13, 2020 04:05');

  let container: Element | null = document.createElement('div');

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container === null) {
      return;
    }
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('should be in document', () => {
    act(() => {
      render(
        <Timer eventDate={laterDate} currentDate={currentDate} />,
        container,
      );
    });
    expect(container?.querySelector('.Timer')).toBeInTheDocument();
  });

  test('should display singular form of word day', () => {
    const date = new Date('July 10, 2020 02:03');
    act(() => {
      render(<Timer eventDate={date} currentDate={currentDate} />, container);
    });
    expect(container?.querySelector('.Timer')).toHaveTextContent(
      '1 day 0 hours 0 minutes ago',
    );
  });

  test('should display plural form of word day', () => {
    const date = new Date('July 9, 2020 02:03');
    act(() => {
      render(<Timer eventDate={date} currentDate={currentDate} />, container);
    });
    expect(container?.querySelector('.Timer')).toHaveTextContent(
      '2 days 0 hours 0 minutes ago',
    );
  });

  test('should display singular form of word hour', () => {
    const date = new Date('July 11, 2020 03:03');
    act(() => {
      render(<Timer eventDate={date} currentDate={currentDate} />, container);
    });
    expect(container?.querySelector('.Timer')).toHaveTextContent(
      '0 days 1 hour 0 minutes',
    );
  });

  test('should display plural form of word hour', () => {
    const date = new Date('July 11, 2020 04:03');
    act(() => {
      render(<Timer eventDate={date} currentDate={currentDate} />, container);
    });
    expect(container?.querySelector('.Timer')).toHaveTextContent(
      '0 days 2 hours 0 minutes',
    );
  });

  test('should display singular form of word minute', () => {
    const date = new Date('July 11, 2020 02:04');
    act(() => {
      render(<Timer eventDate={date} currentDate={currentDate} />, container);
    });
    expect(container?.querySelector('.Timer')).toHaveTextContent(
      '0 days 0 hours 1 minute',
    );
  });

  test('should display plural form of word minute', () => {
    const date = new Date('July 11, 2020 02:05');
    act(() => {
      render(<Timer eventDate={date} currentDate={currentDate} />, container);
    });
    expect(container?.querySelector('.Timer')).toHaveTextContent(
      '0 days 0 hours 2 minutes',
    );
  });

  test('should display now if the launch is now', () => {
    act(() => {
      render(
        <Timer eventDate={currentDate} currentDate={currentDate} />,
        container,
      );
    });
    expect(container?.querySelector('.Timer')).toHaveTextContent('Now');
  });

  test('should display correct difference for past events', () => {
    act(() => {
      render(
        <Timer eventDate={earlierDate} currentDate={currentDate} />,
        container,
      );
    });
    expect(container?.querySelector('.Timer')).toHaveTextContent(
      '1 day 1 hour 1 minute ago',
    );
  });

  test('should display correct difference for future events', () => {
    act(() => {
      render(
        <Timer eventDate={laterDate} currentDate={currentDate} />,
        container,
      );
    });
    expect(container?.querySelector('.Timer')).toHaveTextContent(
      '2 days 2 hours 2 minutes',
    );
  });
});
