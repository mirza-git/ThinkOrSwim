DECLARE LOWER;

# STOCHASTICSLOW
INPUT KPERIOD = 14;
INPUT DPERIOD = 3;
INPUT OVER_BOUGHT = 80;
INPUT OVER_SOLD = 20;

PLOT FASTLINE = STOCHASTICSLOW("D PERIOD" = DPERIOD, "K PERIOD" = KPERIOD);
PLOT SLOWLINE = STOCHASTICSLOW("D PERIOD" = DPERIOD, "K PERIOD" = KPERIOD).SlowD;

FASTLINE.SETDEFAULTCOLOR(COLOR.MAGENTA);
FASTLINE.SETLINEWEIGHT(3);
SLOWLINE.SETDEFAULTCOLOR(COLOR.MAGENTA);
SLOWLINE.SETLINEWEIGHT(1);

PLOT OVERBOUGHT = OVER_BOUGHT;
OVERBOUGHT.SETDEFAULTCOLOR(COLOR.DARK_GRAY);
PLOT OVERSOLD = OVER_SOLD;
OVERSOLD.SETDEFAULTCOLOR(COLOR.DARK_GRAY);

FASTLINE.ASSIGNVALUECOLOR(IF FASTLINE < OVERSOLD THEN COLOR.GREEN ELSE IF FASTLINE > OVERBOUGHT THEN COLOR.RED ELSE COLOR.MAGENTA);
SLOWLINE.ASSIGNVALUECOLOR(COLOR.MAGENTA);
