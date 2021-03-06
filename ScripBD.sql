USE [PruebaTecnica]
GO
/****** Object:  Table [dbo].[tb_empleados]    Script Date: 28/07/2019 21:43:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tb_empleados](
	[cedula] [int] NOT NULL,
	[nombres] [varchar](50) NULL,
	[apellidos] [varchar](50) NULL,
	[cargo] [varchar](50) NULL,
	[password] [varchar](50) NULL,
 CONSTRAINT [PK_tb_empleados] PRIMARY KEY CLUSTERED 
(
	[cedula] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[tb_empleados] ([cedula], [nombres], [apellidos], [cargo], [password]) VALUES (1034548779, N'Juan Carlos', N'Perez', N'Administrador', N'12345')
INSERT [dbo].[tb_empleados] ([cedula], [nombres], [apellidos], [cargo], [password]) VALUES (10354, N'John Alexander', N'Arias Diaz', N'Desarrollador', N'12345')
