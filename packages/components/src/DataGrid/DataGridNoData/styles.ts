import { Typography, type TypographyProps } from '../../Typography';
import { styled } from '../../styles';

export const DataGridNoDataWrapper = styled.tr`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DataGridNoDataFigure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DataGridNoDataIcon = styled.img`
  display: block;

  width: ${({ width }) => `${width}px` || '100%'};
  margin: auto auto ${({ theme }) => theme.spacing(3)};

  object-fit: contain;
`;

export const DataGridNoDataFigcaption = styled(Typography)<TypographyProps>`
  color: ${({ theme }) => theme.palette.grey[600]};
`;
