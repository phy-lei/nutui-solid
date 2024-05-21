import { Button } from '@nutui/nutui-react'

export function Star(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#ffa200"
        d="m16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"
      />
    </svg>
  )
}

export function Plus(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path fill="#ffa200" d="M17 15V5h-2v10H5v2h10v10h2V17h10v-2z" />
    </svg>
  )
}

const Demo3 = () => {
  const marginStyle = { margin: '8px' }
  return (
    <>
      <Button
        type="primary"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Button
      </Button>
      <Button
        type="primary"
        fill="outline"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Button
      </Button>
      <Button
        type="primary"
        fill="dashed"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Button
      </Button>
      <Button
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: '8px',
          'background-color': `var(--nutui-color-primary-light)`,
          'border-color': `var(--nutui-color-primary)`,
          color: `var(--nutui-color-primary)`,
        }}
      >
        Button
      </Button>
      <Button
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: '8px',
          'background-color': `var(--nutui-gray-3)`,
          color: `var(--nutui-gray-7)`,
        }}
      >
        Button
      </Button>
      <Button
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: '8px',
          'background-color': `var(--nutui-gray-1)`,
          color: `var(--nutui-gray-7)`,
        }}
      >
        Button
      </Button>
      <Button
        type="default"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Button
      </Button>
      <Button
        shape="square"
        fill="outline"
        type="primary"
        icon={<Plus />}
        style={marginStyle}
      />
      <Button
        fill="outline"
        type="primary"
        icon={<Plus />}
        style={marginStyle}
      />
      <Button
        type="primary"
        fill="dashed"
        icon={<Plus />}
        style={marginStyle}
      />
      <Button
        type="primary"
        size="large"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Button
      </Button>
      <Button
        type="primary"
        size="xlarge"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        Button
      </Button>
    </>
  )
}
export default Demo3
