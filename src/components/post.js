import React, { Fragment } from 'react';
import './styles/post.css';

export default function Post({ children, ...props }) {
  return (
    <div className="grid-container" {...props}>
      {children}
    </div>
  );
}

Post.Title = function PostTitle({ children, ...props }) {
  return (
    <h2 className="text-center" {...props}>
      {children}
    </h2>
  );
};

Post.Form = function PostForm({ children, ...props }) {
  return <form {...props}>{children}</form>;
};

Post.FormGroup = function PostFormGroup({ children, ...props }) {
  return (
    <div className="input-group" {...props}>
      {children}
    </div>
  );
};

Post.Label = function PostLabel({ labelId, children, ...props }) {
  return (
    <label htmlFor={labelId} className="show-for-sr" {...props}>
      {children}
    </label>
  );
};

Post.Input = function PostInput({ inputId, name, forwardRef, ...props }) {
  return (
    <input
      type="text"
      className="input-group-field"
      id={inputId}
      name={name}
      ref={forwardRef}
      {...props}
    />
  );
};

Post.ButtonGroup = function PostButtonGroup({ children, ...props }) {
  return (
    <div className="input-group-button" {...props}>
      {children}
    </div>
  );
};

Post.Button = function PostButton({ children, ...props }) {
  return (
    <button type="submit" className="button" {...props}>
      {children}
    </button>
  );
};

Post.Group = function PostGroup({ children, ...props }) {
  return <main {...props}>{children}</main>;
};

Post.List = function PostList({ children, ...props }) {
  return (
    <div
      className="callout callout--container flex-container align-justify"
      {...props}
    >
      {children}
    </div>
  );
};

Post.Message = function PostMessage({ children, ...props }) {
  return (
    <p className="callout--message" {...props}>
      {children}
    </p>
  );
};

Post.ButtonGroup = function PostButtonGroup({ children, ...props }) {
  return (
    <div className="flex-container" {...props}>
      {children}
    </div>
  );
};

Post.DeleteButton = function PostDeleteButton({ children, ...props }) {
  return (
    <button className="button__ops" type="button" {...props}>
      {children}
    </button>
  );
};

Post.FlagButton = function PostOpsButton({ children, ...props }) {
  return (
    <button className="button__ops button__ops--flag" type="button" {...props}>
      {children}
    </button>
  );
};
