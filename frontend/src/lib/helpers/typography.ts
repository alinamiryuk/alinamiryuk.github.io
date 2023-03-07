import {
  TypographyColor,
  TypographyVariant,
} from 'components/shared/Typography/TypographyTypes'

interface TypographyClassNameProps {
  variant: TypographyVariant
  color: TypographyColor | undefined
}

export const getTypographyClassName = (
  props: TypographyClassNameProps,
): string => {
  let className = `typography`
  const { variant, color } = props
  switch (variant) {
    case TypographyVariant.H2: {
      className += ' typography-variant-h2'
      break
    }
    case TypographyVariant.BASIC_TEXT: {
      className += ' typography-variant-basic-text'
      break
    }
    case TypographyVariant.BASIC_BOLD_TEXT: {
      className += ' typography-variant-basic-bold-text'
      break
    }
  }

  switch (color) {
    case TypographyColor.PRIMARY: {
      break
    }
    case TypographyColor.SECONDARY: {
      className += ' typography-color-secondary'
      break
    }
    case TypographyColor.CORRECT: {
      className += ' typography-color-correct'
      break
    }
    case TypographyColor.DANGER: {
      className += ' typography-color-danger'
      break
    }
  }
  return className
}
