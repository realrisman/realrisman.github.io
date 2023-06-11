type StoryContainerProps = {
  padding?: number;
  stretch?: boolean;
  gutter?: number;
  vertical?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const StoryContainer = ({
  padding = 32,
  stretch,
  gutter = 32,
  vertical,
  children,
  style,
}: StoryContainerProps) => (
  <div
    className="w-screen h-screen flex items-start justify-start"
    style={{
      padding,
      gap: gutter,
      flexDirection: vertical ? "column" : "row",
      alignItems: stretch ? "stretch" : "flex-start",
      justifyContent: stretch ? "stretch" : "flex-start",
      ...style,
    }}
  >
    {children}
  </div>
);

export default StoryContainer;
