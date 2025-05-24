// /** @jsxImportSource @emotion/react */
// import { useId } from "react";
// import { useTheme } from "@emotion/react";

// import {
//   textFieldWrapperStyle,
//   textFieldLabelStyle,
//   textFieldStyle,
//   textFieldErrorStyle,
// } from "./styles";

// const TextField = ({
//   multiline,
//   label,
//   name,
//   register,
//   rules,
//   error,
//   as = "input",
//   ...props
// }) => {
//   const { colors } = useTheme();

//   const id = useId();

//   return (
//     <div css={textFieldWrapperStyle}>
//       {label && (
//         <label htmlFor={id} css={textFieldLabelStyle}>
//           {label}
//         </label>
//       )}
//       {as === "input" && (
//         <input
//           {...register(name, rules)}
//           {...props}
//           id={id}
//           css={textFieldStyle(colors.lightBg)}
//         />
//       )}
//       {as === "textarea" && (
//         <textarea
//           {...register(name, rules)}
//           {...props}
//           id={id}
//           css={textFieldStyle(colors.lightBg)}
//         ></textarea>
//       )}
//       {error && <p css={textFieldErrorStyle}>{error.message}</p>}
//     </div>
//   );
// };

// export default TextField;

/** @jsxImportSource @emotion/react */
import { useId } from "react";
import { useTheme } from "@emotion/react";

import {
  textFieldWrapperStyle,
  textFieldLabelStyle,
  textFieldStyle,
  textFieldErrorStyle,
} from "./styles";

const TextField = ({
  multiline = false,
  label,
  name,
  register,
  rules,
  error,
  ...props
}) => {
  const { colors } = useTheme();
  const id = useId();

  // Очищаем maxRows, чтобы не передавать его в DOM напрямую
  const { maxRows, ...restProps } = props;

  return (
    <div css={textFieldWrapperStyle}>
      {label && (
        <label htmlFor={id} css={textFieldLabelStyle}>
          {label}
        </label>
      )}
      {multiline ? (
        <textarea
          {...register(name, rules)}
          {...restProps}
          id={id}
          rows={maxRows || 4} // Используем как rows
          css={textFieldStyle(colors.lightBg)}
        ></textarea>
      ) : (
        <input
          {...register(name, rules)}
          {...restProps}
          id={id}
          css={textFieldStyle(colors.lightBg)}
        />
      )}
      {error && <p css={textFieldErrorStyle}>{error.message}</p>}
    </div>
  );
};

export default TextField;
