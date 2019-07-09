import ReactSVG from 'react-svg';
import Link from 'next/link';
import Head from 'next/head';

export default props => (
  <footer className="border-t">
    <div className="mx-auto container px-6 py-10">
      <div className="flex items-center justify-start opacity-25">
        <div className="mr-3">
          <ReactSVG src="/static/level.svg" />
        </div>
        <div className="font-semibold">Level Technologies</div>
      </div>
    </div>
  </footer>
);