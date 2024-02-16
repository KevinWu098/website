interface ConditionalWrapperProps {
    condition: boolean;
    wrapper: (children: React.ReactNode) => JSX.Element;
    children: JSX.Element;
}

const ConditionalWrapper = ({
    condition,
    wrapper,
    children,
}: ConditionalWrapperProps) => {
    return condition ? wrapper(children) : children;
};

export default ConditionalWrapper;
